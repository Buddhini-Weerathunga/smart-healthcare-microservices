const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());
app.use(morgan('dev'));

// Patient Service
app.use('/api/patients', createProxyMiddleware({
  target: 'http://localhost:5005/api/patients',
  changeOrigin: true
}));

// Doctor Service
app.use('/api/doctors', createProxyMiddleware({
  target: 'http://localhost:5000/api/doctors',
  changeOrigin: true
}));

// Appointment Service
app.use('/api/appointments', createProxyMiddleware({
  target: 'http://localhost:5002/api/appointments',
  changeOrigin: true
}));

// Pharmacy Service
app.use('/api/medicines', createProxyMiddleware({
  target: 'http://localhost:5004/api/medicines',
  changeOrigin: true
}));

app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});