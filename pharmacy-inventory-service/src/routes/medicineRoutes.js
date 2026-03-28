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

router.post("/", createMedicine);
router.get("/", getAllMedicines);
router.get("/search", searchMedicines);
router.get("/low-inventory", getLowInventoryMedicines);
router.get("/:id", getMedicineById);
router.put("/:id", updateMedicine);
router.delete("/:id", deleteMedicine);

export default router;