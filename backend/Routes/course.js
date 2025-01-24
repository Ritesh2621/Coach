import express from "express";
import { CourseModel } from "../Model/Course.js";

const router = express.Router();

// Route to get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await CourseModel.find();
        res.json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error.message);
        res.status(500).json({ message: error.message });
    }
});

// Route to get a specific course by ID
router.get('/course/:id', async (req, res) => {
    const { id } = req.params; // Get the id from the request parameters

    try {
        const course = await CourseModel.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
    } catch (error) {
        console.error("Error fetching course by ID:", error.message);
        res.status(500).json({ message: error.message });
    }
});

export { router as CourseRouter };
