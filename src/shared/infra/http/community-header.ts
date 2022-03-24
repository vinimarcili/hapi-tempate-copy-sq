const key = 'x-sq-community'

const plugin = {
  register: (server: any, options: any, next: any) => {
    server.ext('onRequest', (request: any, reply: any) => {
      // Identifica se tem o header do Squid Community
      if (request.headers[key]) {
        request.community = {
          [key]: request.headers[key],
          sqCommunity: request.headers[key].split('-')[0],
          sqWhitelabel: request.headers[key].split('-').length > 1 ? request.headers[key].split('-')[1] : ''
        }
      } else {
        request.community = {}
      }
      return reply.continue
    })
  },
  name: 'sq-community-header',
  options: {
    apiVersion: require('../../../../package.json').version
  }
}

export default plugin