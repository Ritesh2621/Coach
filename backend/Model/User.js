import mongoose from 'mongoose';

// Define User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['user', 'admin'],  
    default: 'user',
  },
});



// Create User Model
export const UserModel = mongoose.model("users", UserSchema);