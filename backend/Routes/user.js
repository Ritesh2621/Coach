import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import { UserModel } from "../Model/User.js";


const router = express.Router();


// Middleware to parse cookies
router.use(cookieParser());

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, phone, password } = req.body; // No role here, default is user
  const user = await UserModel.findOne({ email });

  try {
    if (user) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});






export { router as UserRouter };