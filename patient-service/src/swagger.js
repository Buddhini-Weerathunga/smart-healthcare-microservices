const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Patient Service API',
      version: '1.0.0',
      description: 'API documentation for Patient Service'
    },
    servers: [
      {
        url: 'http://localhost:5005'
      }
    ]
  },
  apis: [path.join(__dirname, 'routes', '*.js')]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;