const express = require('express');
const router = express.Router();
const appointmentController = require('./appointmentController');

router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.get('/patient/:patientId', appointmentController.getAppointmentsByPatientId);
router.get('/doctor/:doctorId', appointmentController.getAppointmentsByDoctorId);
router.put('/:id', appointmentController.updateAppointment);
router.patch('/:id/status', appointmentController.updateAppointmentStatus);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
