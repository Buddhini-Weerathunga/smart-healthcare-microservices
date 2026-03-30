require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/doctors', doctorRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Doctor Service Running...');
});

// Port
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Choose another port with PORT=<number> or stop the process using it.`);
    process.exit(1);
  } else {
    console.error(err);
    process.exit(1);
  }
});