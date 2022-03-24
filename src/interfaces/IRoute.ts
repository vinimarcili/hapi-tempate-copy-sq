import { RouteOptions, ServerRoute, Server } from 'hapi'
interface IRoute extends ServerRoute {
    handler: Function,
    options: RouteOptions | ((server: Server) => RouteOptions) | undefined;
}

export { IRoute }