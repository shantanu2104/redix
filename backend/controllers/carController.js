import Car from "../models/Car.js";

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
