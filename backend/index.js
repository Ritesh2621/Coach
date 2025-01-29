// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';



// Create an Express app
const app = express();

// Import routers

import { UserRouter } from "./Routes/user.js";
import { CourseRouter } from "./Routes/course.js";
import { StoriesRouter } from "./Routes/story.js";



// Middleware setup
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Change this to your frontend URL
  credentials: true, // Enable credentials (cookies)
}));
app.use(cookieParser());


app.use("/auth", UserRouter);
app.use("/course", CourseRouter);
app.use("/story", StoriesRouter);





// MongoDB connection using environment variables
mongoose.connect('mongodb+srv://learnopedia292:Space292@cluster0.7ghql.mongodb.net/')
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log("MongoDB connection error:", e);
  });

// Start the server using environment variables
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));