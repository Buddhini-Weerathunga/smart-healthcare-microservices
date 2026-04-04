import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    medicineCode: {
      type: String,
      required: [true, "Medicine code is required"],
      unique: true,
      trim: true,
      uppercase: true
    },
    medicineName: {
      type: String,
      required: [true, "Medicine name is required"],
      trim: true
    },
   
     expiryDate: {
      type: Date,
      required: [true, "Expiry date is required"]
    },
    buyingPrice: {
      type: Number,
      required: [true, "Buying price is required"],
      min: [0, "Buying price cannot be negative"]
    },
   
    stockQuantity: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock quantity cannot be negative"],
      default: 0
    },
    reorderLevel: {
      type: Number,
      required: [true, "Reorder level is required"],
      min: [0, "Reorder level cannot be negative"],
      default: 10
    }
   
    
  },
  {
    timestamps: true
  }
);

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;