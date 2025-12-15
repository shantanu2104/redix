import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

//Token generating function 
const generateToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE,
  })
}
// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;

    if (!email.endsWith("@gmail.com")) {
      return res.json({ success: false, message: "Only Gmail allowed" });
    }

    const exists = await User.findOne({ email });
    if (exists)
      return res.json({ success: false, message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      mobile,
      email,
      password: hashed,
    });
    const token =generateToken(newUser._id);
    res.json({ success: true, message: "Signup successful", user: newUser ,token});
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { account, password } = req.body;

    const user = await User.findOne({ email: account });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.json({ success: false, message: "Invalid password" });
    const token=generateToken(user._id);
    res.json({ success: true, message: "Login successful", user ,token});
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
