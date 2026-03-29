const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Patient Service
app.use('/api/patients', createProxyMiddleware({
  target: 'http://localhost:5001',
  changeOrigin: true
}));

// Doctor Service
app.use('/api/doctors', createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true
}));

// Appointment Service
app.use('/api/appointments', createProxyMiddleware({
  target: 'http://localhost:5003',
  changeOrigin: true
}));

// Pharmacy Service
app.use('/api/medicines', createProxyMiddleware({
  target: 'http://localhost:5004',
  changeOrigin: true
}));

app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});