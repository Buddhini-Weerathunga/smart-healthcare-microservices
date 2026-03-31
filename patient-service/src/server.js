const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const connectDB = require('./config/db');
const patientRoutes = require('./routes/patient.routes');
const swaggerSpec = require('./swagger');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/patients', patientRoutes);

// DB
connectDB();

// Start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`🚀 Patient Service running on port ${PORT}`);
});