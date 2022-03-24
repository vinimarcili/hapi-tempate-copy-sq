import { Server, ResponseToolkit, Request } from "hapi"
import { inject, injectable, DependencyContainer } from 'tsyringe'
import Boom from 'boom'
import * as glob from 'glob'
import * as path from 'path'
import * as HapiSwagger from 'hapi-swagger'
import { hapi18 as felicityStatus } from 'felicity-status'

import ILog from "@interfaces/ILog"
import { IRoute } from "@interfaces/IRoute"

import getCommunityHeader from './community-header'
import { processEnv } from './environment'

@injectable()
export default class AppServer {
  constructor (
    @inject("log")
    private log?: ILog
  ) {

  }
  public async start(container: DependencyContainer): Promise<Server> {
    try {
      const server = await this.createServer()
      await this.registerPlugins(server)
      await this.registerAuthenticationOnServer(server)
      await this.registerSwagger(server)
      await this.registerRoutes(server, container)
      await this.registerFelicityStatus(server)

      console.info(`Server running in ${processEnv.CONTAINER_PORT || 6789} port.`)
      await server.start()
  
      return server
    } catch (err) {
      throw err
    }
    
  }

  /**
   * @desc Cria a instancia do servidor
   */
  private async  createServer (): Promise<Server> {
    return new Server({
      port: processEnv.CONTAINER_PORT || 6789,
      routes: {
        cors: {
          origin: ['*'],
          credentials: true,
          additionalHeaders: []
        },
        validate: {
          failAction: async (_request: Request, _reply: ResponseToolkit, error: any) => {
            if (processEnv.NODE_ENV !== 'test') console.error('ValidationError:', error.message)
            if (processEnv.NODE_ENV === 'test') throw error
            if (error.name === 'ValidationError') throw Boom.badRequest(error.message)
            throw Boom.badRequest(`Invalid request ${error.output.payload.validation.source} input`)
          }
        }
      }
    })
  }

  /**
   * @desc Registra os plugins dentro do servidoor
   * @param server <Server>
   */
  private async registerPlugins (server: Server): Promise<Server> {
    const googSequelizePlugin = {
      plugin: require('good'),
      options: {
        ops: {
          interval: 1000
        },
        reporters: {
          console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*', error: '*' }]
          }, {
            module: 'good-console',
            args: [{
              format: 'YYYY/MM/DD HH:mm:ss'
            }]
          }, 'stdout']
        }
      }
    }
    
    
    await server.register([
      getCommunityHeader,
      googSequelizePlugin,
      require('sq-winston').middlewares.hapi17,
      require('hapi-auth-jwt2'),
      require('vision'),
      require('inert'),
      {
        plugin: require('lout'),
        options: {
          apiVersion: require('../../../../package.json').version
        }
      }
    ])
    return server
  }

  private async registerSwagger (server: Server) {
    console.log('registering swagger')
    const swaggerOptions = {
      info: {
        title: `${require('../../../../package.json').name} Documentação`,
        version: require('../../../../package.json').version
      },
      // auth: 'token'
    }

    await server.register({
      plugin: HapiSwagger,
      options: swaggerOptions
    })

    return server
  }

  private async registerFelicityStatus (server: Server) {
    console.log('registering Felicity Status')

    await server.register([
      felicityStatus
    ])
  }

  /**
   * @desc Registra no servidor as strategies para resolver os JWT do hub e o ADM 
   * @param server 
   */
  private async registerAuthenticationOnServer(server: Server): Promise<Server> {
    server.auth.strategy('token', 'jwt', {
      key: Buffer.from(processEnv.AUTH0_SQUID_ADM_CLIENT_SECRET || '', 'base64'),
      validate: () => ({ isValid: true }),
      verifyOptions: {
        algorithms: ['HS256'],
        audience: processEnv.AUTH0_SQUID_ADM_CLIENT_ID || ''
      }
    })

    server.auth.strategy('squid-hub', 'jwt', {
      key: Buffer.from(processEnv.AUTH0_SQUIDHUB_CLIENT_SECRET || '', 'utf8'),
      validate: () => ({ isValid: true }),
      verifyOptions: {
        algorithms: ['HS256'],
        audience: processEnv.AUTH0_SQUIDHUB_CLIENT_ID || ''
      }
    })
    return server
  }

  private async registerRoutes (server: Server, container: DependencyContainer) {
    const routesPaths: string[] = glob.sync(path.join(
      __dirname, '..', '..', '..', 'routes', '**', '*.route.+(js|ts)',)
    )

    console.info('Registering routes')

    const routes: IRoute[] = await Promise.all<IRoute>(
      routesPaths.map(async file => {
        const importedFile = await import(path.resolve(file))
        const route  = importedFile.default
        return route
      })
    )
    
    for (const route of routes) {
      server.route({
        ...route,
        handler: async (request: Request, response: ResponseToolkit, ) => {
          return route.handler(request, response, container)
        }
      })
    }

    return server
  }
}