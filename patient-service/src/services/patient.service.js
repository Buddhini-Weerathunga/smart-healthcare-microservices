// src/services/patient.service.js
const Patient = require('../models/patient.model');

exports.createPatient = async (data) => {
  const patient = new Patient(data);
  return await patient.save();
};

exports.getAllPatients = async () => {
  return await Patient.find();
};

exports.getPatientById = async (id) => {
  return await Patient.findById(id);
};

exports.updatePatient = async (id, data) => {
  return await Patient.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePatient = async (id) => {
  return await Patient.findByIdAndDelete(id);
};