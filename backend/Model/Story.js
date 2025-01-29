import mongoose from 'mongoose';

// Define User Schema
const StoriesSchema = new mongoose.Schema({
  img: { type: String },
  rating: { type: String, required: true },
  name: { type: String, required: true },
  role: { 
    type: String, 
 required: true
  },
});



// Create User Model
export const StoriesModel = mongoose.model("Story", StoriesSchema);