const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Doctor Service API',
      version: '1.0.0',
      description: 'API documentation for Doctor Service'
    },
    servers: [
      {
        url: 'http://localhost:5000'
      }
    ]
  },
  apis: ['./routes/*.js']   // ✅ FIXED PATH
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;