import express from "express";
import {
  createMedicine,
  getAllMedicines,
  getMedicineById,
  updateMedicine,
  deleteMedicine,
  searchMedicines,
  getLowInventoryMedicines
} from "../controllers/medicineController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Medicines
 *   description: Medicine Management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Medicine:
 *       type: object
 *       required:
 *         - medicineCode
 *         - medicineName
 *         - batchNumber
 *         - expiryDate
 *         - buyingPrice
 *         - sellingPrice
 *         - stockQuantity
 *         - reorderLevel
 *         - unit
 *       properties:
 *         _id:
 *           type: string
 *           example: 6612ab34cd56ef7890123456
 *         medicineCode:
 *           type: string
 *           example: MED001
 *         medicineName:
 *           type: string
 *           example: Paracetamol 500mg
 *         genericName:
 *           type: string
 *           example: Paracetamol
 *         category:
 *           type: string
 *           example: Painkiller
 *         batchNumber:
 *           type: string
 *           example: BATCH1001
 *         expiryDate:
 *           type: string
 *           format: date
 *           example: 2027-12-31
 *         buyingPrice:
 *           type: number
 *           example: 10.5
 *         sellingPrice:
 *           type: number
 *           example: 15
 *         stockQuantity:
 *           type: number
 *           example: 100
 *         reorderLevel:
 *           type: number
 *           example: 20
 *         unit:
 *           type: string
 *           example: Tablets
 *         status:
 *           type: string
 *           enum: [Active, Inactive]
 *           example: Active
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-03-31T12:00:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-03-31T12:00:00.000Z
 */

/**
 * @swagger
 * /api/medicines:
 *   post:
 *     summary: Create a new medicine
 *     tags: [Medicines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medicine'
 *     responses:
 *       201:
 *         description: Medicine created successfully
 *       400:
 *         description: Invalid input data
 */
router.post("/", createMedicine);

/**
 * @swagger
 * /api/medicines:
 *   get:
 *     summary: Get all medicines
 *     tags: [Medicines]
 *     responses:
 *       200:
 *         description: List of medicines fetched successfully
 */
router.get("/", getAllMedicines);

/**
 * @swagger
 * /api/medicines/search:
 *   get:
 *     summary: Search medicines
 *     tags: [Medicines]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: Search keyword for medicine name, code, category, or generic name
 *     responses:
 *       200:
 *         description: Search results fetched successfully
 *       400:
 *         description: Keyword is required
 */
router.get("/search", searchMedicines);

/**
 * @swagger
 * /api/medicines/low-inventory:
 *   get:
 *     summary: Get low inventory medicines
 *     tags: [Medicines]
 *     responses:
 *       200:
 *         description: Low inventory medicines fetched successfully
 */
router.get("/low-inventory", getLowInventoryMedicines);

/**
 * @swagger
 * /api/medicines/{id}:
 *   get:
 *     summary: Get medicine by ID
 *     tags: [Medicines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Medicine ID
 *     responses:
 *       200:
 *         description: Medicine fetched successfully
 *       404:
 *         description: Medicine not found
 */
router.get("/:id", getMedicineById);

/**
 * @swagger
 * /api/medicines/{id}:
 *   put:
 *     summary: Update medicine
 *     tags: [Medicines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Medicine ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               medicineCode:
 *                 type: string
 *                 example: MED001
 *               medicineName:
 *                 type: string
 *                 example: Paracetamol 650mg
 *               genericName:
 *                 type: string
 *                 example: Paracetamol
 *               category:
 *                 type: string
 *                 example: Painkiller
 *               batchNumber:
 *                 type: string
 *                 example: BATCH1002
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 example: 2027-12-31
 *               buyingPrice:
 *                 type: number
 *                 example: 12
 *               sellingPrice:
 *                 type: number
 *                 example: 18
 *               stockQuantity:
 *                 type: number
 *                 example: 120
 *               reorderLevel:
 *                 type: number
 *                 example: 25
 *               unit:
 *                 type: string
 *                 example: Tablets
 *               status:
 *                 type: string
 *                 enum: [Active, Inactive]
 *                 example: Active
 *     responses:
 *       200:
 *         description: Medicine updated successfully
 *       404:
 *         description: Medicine not found
 */
router.put("/:id", updateMedicine);

/**
 * @swagger
 * /api/medicines/{id}:
 *   delete:
 *     summary: Delete medicine
 *     tags: [Medicines]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Medicine ID
 *     responses:
 *       200:
 *         description: Medicine deleted successfully
 *       404:
 *         description: Medicine not found
 */
router.delete("/:id", deleteMedicine);

export default router;