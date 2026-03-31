const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Appointment management API
 */

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *                 example: P001
 *               patientName:
 *                 type: string
 *                 example: John Doe
 *               doctorId:
 *                 type: string
 *                 example: D001
 *               doctorName:
 *                 type: string
 *                 example: Dr. Silva
 *               appointmentDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-03-30T10:00:00.000Z
 *               status:
 *                 type: string
 *                 example: Scheduled
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', appointmentController.createAppointment);

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: Appointments retrieved successfully
 */
router.get('/', appointmentController.getAllAppointments);

/**
 * @swagger
 * /api/appointments/patient/{patientId}:
 *   get:
 *     summary: Get appointments by patient ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: patientId
 *         required: true
 *         schema:
 *           type: string
 *         example: P001
 *     responses:
 *       200:
 *         description: Patient appointments retrieved successfully
 *       404:
 *         description: No appointments found
 */
router.get('/patient/:patientId', appointmentController.getAppointmentsByPatientId);

/**
 * @swagger
 * /api/appointments/doctor/{doctorId}:
 *   get:
 *     summary: Get appointments by doctor ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: doctorId
 *         required: true
 *         schema:
 *           type: string
 *         example: D001
 *     responses:
 *       200:
 *         description: Doctor appointments retrieved successfully
 *       404:
 *         description: No appointments found
 */
router.get('/doctor/:doctorId', appointmentController.getAppointmentsByDoctorId);

/**
 * @swagger
 * /api/appointments/{id}:
 *   get:
 *     summary: Get appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 67e95f8c1234567890abcd12
 *     responses:
 *       200:
 *         description: Appointment retrieved successfully
 *       404:
 *         description: Appointment not found
 */
router.get('/:id', appointmentController.getAppointmentById);

/**
 * @swagger
 * /api/appointments/{id}:
 *   put:
 *     summary: Update appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 67e95f8c1234567890abcd12
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *                 example: P001
 *               patientName:
 *                 type: string
 *                 example: John Doe
 *               doctorId:
 *                 type: string
 *                 example: D001
 *               doctorName:
 *                 type: string
 *                 example: Dr. Silva
 *               appointmentDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-03-31T11:00:00.000Z
 *               status:
 *                 type: string
 *                 example: Completed
 *     responses:
 *       200:
 *         description: Appointment updated successfully
 *       404:
 *         description: Appointment not found
 */
router.put('/:id', appointmentController.updateAppointment);

/**
 * @swagger
 * /api/appointments/{id}/status:
 *   patch:
 *     summary: Update appointment status
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 67e95f8c1234567890abcd12
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: Cancelled
 *     responses:
 *       200:
 *         description: Appointment status updated successfully
 *       404:
 *         description: Appointment not found
 */
router.patch('/:id/status', appointmentController.updateAppointmentStatus);

/**
 * @swagger
 * /api/appointments/{id}:
 *   delete:
 *     summary: Delete appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 67e95f8c1234567890abcd12
 *     responses:
 *       200:
 *         description: Appointment deleted successfully
 *       404:
 *         description: Appointment not found
 */
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;