// src/models/patient.model.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  disease: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);