import Medicine from "../models/Medicine.js";

// @desc    Create medicine
// @route   POST /api/medicines
export const createMedicine = async (req, res) => {
  try {
    const {
      medicineCode,
      medicineName,
      expiryDate,
      buyingPrice,
      stockQuantity,
      reorderLevel
    } = req.body;

    if (
      !medicineCode ||
      !medicineName ||
      !expiryDate ||
      buyingPrice === undefined ||
      stockQuantity === undefined ||
      reorderLevel === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields"
      });
    }

    const existingMedicine = await Medicine.findOne({
      medicineCode: medicineCode.toUpperCase()
    });

    if (existingMedicine) {
      return res.status(400).json({
        success: false,
        message: "Medicine code already exists"
      });
    }

    const medicine = await Medicine.create({
      medicineCode: medicineCode.toUpperCase(),
      medicineName,
      expiryDate,
      buyingPrice,
      stockQuantity,
      reorderLevel
    });

    return res.status(201).json({
      success: true,
      message: "Medicine created successfully",
      data: medicine
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all medicines
// @route   GET /api/medicines
export const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: medicines.length,
      data: medicines
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get medicine by ID
// @route   GET /api/medicines/:id
export const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: medicine
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Invalid medicine ID or server error"
    });
  }
};

// @desc    Update medicine
// @route   PUT /api/medicines/:id
export const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found"
      });
    }

    if (req.body.medicineCode) {
      const upperCode = req.body.medicineCode.toUpperCase();

      const duplicateMedicine = await Medicine.findOne({
        medicineCode: upperCode,
        _id: { $ne: req.params.id }
      });

      if (duplicateMedicine) {
        return res.status(400).json({
          success: false,
          message: "Another medicine already uses this medicine code"
        });
      }

      req.body.medicineCode = upperCode;
    }

    const updatedMedicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    return res.status(200).json({
      success: true,
      message: "Medicine updated successfully",
      data: updatedMedicine
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete medicine
// @route   DELETE /api/medicines/:id
export const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        success: false,
        message: "Medicine not found"
      });
    }

    await Medicine.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Medicine deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Delete failed"
    });
  }
};

// @desc    Search medicines
// @route   GET /api/medicines/search?keyword=para
export const searchMedicines = async (req, res) => {
  try {
    const keyword = req.query.keyword?.trim() || "";

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: "Keyword is required"
      });
    }

    const medicines = await Medicine.find({
      $or: [
        { medicineName: { $regex: keyword, $options: "i" } },
        { medicineCode: { $regex: keyword, $options: "i" } }
      ]
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: medicines.length,
      data: medicines
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Search failed"
    });
  }
};

// @desc    Get low inventory medicines
// @route   GET /api/medicines/low-inventory
export const getLowInventoryMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find({
      $expr: {
        $lte: ["$stockQuantity", "$reorderLevel"]
      }
    }).sort({ stockQuantity: 1 });

    return res.status(200).json({
      success: true,
      count: medicines.length,
      data: medicines
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Could not fetch low inventory medicines"
    });
  }
};