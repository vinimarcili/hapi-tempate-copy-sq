import { injectable } from "tsyringe";
import got from 'got';

import { ApplicationError } from "@errors/ApplicationError"
import { processEnv } from "@shared/infra/http/environment";

import { IWebapp, IWebAppsProvider } from "../models/IWebAppsProvider";

@injectable()
export default class ElektraWebAppsProvider implements IWebAppsProvider {
  async getWebapp(id: string): Promise<IWebapp> {
    try {
      const { body } = await got(`${processEnv.ELEKTRA_API_URL}/api/webapp/${id}`, {
        headers: {
          Authorization: `Bearer ${processEnv.SQUID_API_TOKEN}`
        },
        responseType: "json" 
      })

      return body as IWebapp
    } catch (error) {
      throw ApplicationError({
        message: 'Erro ao retornar Webapp.',
        typeError: 'WebAppsProvicer',
        statusCode: 500,
        stack: error
      })
    }
  }

  async getWebappByIds(ids: string | string[]): Promise<IWebapp[]> {
    try {
      const { body } = await got(`${processEnv.ELEKTRA_API_URL}/api/webapp/all?whitelabels=${ids}`, {
        headers: {
          Authorization: `Bearer ${processEnv.SQUID_API_TOKEN}`
        },
        responseType: "json" 
      })

      return body as IWebapp[]
    } catch (error) {
      throw ApplicationError({
        message: 'Erro ao retornar Webapps.',
        typeError: 'WebAppsProvicer - Elektra',
        statusCode: 500,
        stack: error
      })
    }
  }

  async getWebappByOrganizations(organizations: string): Promise<any> {
    try {
      const { body } = await got(`${processEnv.ELEKTRA_API_URL}/api/webapp/new?organization=${organizations}`, {
        headers: {
          Authorization: `Bearer ${processEnv.SQUID_API_TOKEN}`
        },
        responseType: "json" 
      })

      return body
    } catch (error) {
      throw ApplicationError({
        message: 'Erro ao retornar Webapp pela organização.',
        typeError: 'WebAppsProvicer',
        statusCode: 500,
        stack: error
      })
    }
  }
}