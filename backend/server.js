import express from "express"
import dotenv from 'dotenv'
import cors from "cors";
import connectDB from "./config/db.js";
import carRoutes from "./routes/carRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
dotenv.config();
const app =express();

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/cart",cartRoutes);
connectDB();

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))