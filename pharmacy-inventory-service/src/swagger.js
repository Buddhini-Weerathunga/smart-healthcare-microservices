import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Medicine API",
      version: "1.0.0",
      description: "Pharmacy Inventory Microservice API"
    },
    servers: [
      {
        url: "http://localhost:5004"
      }
    ]
  },
  apis: ["./src/routes/*.js"] // correct path
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;