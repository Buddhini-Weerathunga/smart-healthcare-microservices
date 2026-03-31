const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

/**
 * @swagger
 * tags:
 *   name: Doctors
 *   description: Doctor management API
 */

/**
 * @swagger
 * /api/doctors:
 *   post:
 *     summary: Create a new doctor
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               doctorId:
 *                 type: string
 *                 example: D001
 *               name:
 *                 type: string
 *                 example: Dr. Silva
 *               specialization:
 *                 type: string
 *                 example: Cardiology
 *               email:
 *                 type: string
 *                 example: drsilva@gmail.com
 *               phone:
 *                 type: string
 *                 example: 0771234567
 *               availability:
 *                 type: string
 *                 example: Monday to Friday
 *     responses:
 *       201:
 *         description: Doctor created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', doctorController.createDoctor);

/**
 * @swagger
 * /api/doctors:
 *   get:
 *     summary: Get all doctors
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: Doctors retrieved successfully
 */
router.get('/', doctorController.getDoctors);

/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     summary: Get doctor by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 67e95f8c1234567890abcd12
 *     responses:
 *       200:
 *         description: Doctor retrieved successfully
 *       404:
 *         description: Doctor not found
 */
router.get('/:id', doctorController.getDoctorById);

/**
 * @swagger
 * /api/doctors/{id}:
 *   put:
 *     summary: Update doctor by ID
 *     tags: [Doctors]
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
 *               doctorId:
 *                 type: string
 *                 example: D001
 *               name:
 *                 type: string
 *                 example: Dr. Silva
 *               specialization:
 *                 type: string
 *                 example: Neurology
 *               email:
 *                 type: string
 *                 example: drsilva@gmail.com
 *               phone:
 *                 type: string
 *                 example: 0771234567
 *               availability:
 *                 type: string
 *                 example: Monday to Saturday
 *     responses:
 *       200:
 *         description: Doctor updated successfully
 *       404:
 *         description: Doctor not found
 */
router.put('/:id', doctorController.updateDoctor);

/**
 * @swagger
 * /api/doctors/{id}:
 *   delete:
 *     summary: Delete doctor by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 67e95f8c1234567890abcd12
 *     responses:
 *       200:
 *         description: Doctor deleted successfully
 *       404:
 *         description: Doctor not found
 */
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;