const config = require('./config');
exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify Template',
      description: 'Fastify template',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: config.serverHost,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};