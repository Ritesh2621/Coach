import express from "express";
import { StoriesModel } from "../Model/Story.js";

const router = express.Router();

// Route to get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await StoriesModel.find();
        res.json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error.message);
        res.status(500).json({ message: error.message });
    }
});

router.post('/story', async (req, res) => {
    try {
        const { img, rating,name,role } = req.body;

        // Create a new instance of MainModel
        const newMain = new StoriesModel({
            img, rating,name,role
        });

        // Save the instance to the database
        await newMain.save();

        // Send a success response
        res.status(201).json({
            message: 'New MainModel document created successfully',
            data: newMain
        });
    } catch (error) {
        console.error('Error creating MainModel:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
});

export { router as StoriesRouter };
