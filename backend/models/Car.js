import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  pricePerHour: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  imageUrl: { type: String },
  description: { type: String },
  isAvailable: { type: Boolean, default: true },
  bookedDates: [
    {
      startDate: Date,
      endDate: Date,
    },
  ],
});

export default mongoose.model("Car", carSchema);
