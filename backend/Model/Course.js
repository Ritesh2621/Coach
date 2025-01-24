import mongoose from 'mongoose';

// Define Course Schema
const CourseSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    title: { type: String, required:true },
    summary: { type: String },
    description: { type: String },
    language: { type: String },
    module_count: { type: Number },
    session_count: { type: Number },
    fees: { type: Number },
    discounted_fees: { type: Number },
    share_link: { type: String, default: "None" },
    syllabus: { type: String },
    course_state: { type: String, enum: ["Draft", "Published", "Archived"], default: "Draft" },
    course_image: { type: String }, 
    course_video: { type: String }, 
    course_type: { type: String, enum: ["Free", "Paid"], default: "Paid" },
    prerequisite: { type: [String] }, 
    course_level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
    age_group: { type: String }, 
    category: { type: [String] }, 
    course_key_feature: { type: [String] }, 
    roadmap: { type: String }, 
    brochure: { type: String }, 
    start_date: { type: Date }, 
    registration_url: { type: String }, 
    trend: { type: Number, min: 0, max: 100, default: 0 }, 
    avg_rating: { type: Number, min: 0, max: 5, default: 0 }, 
    duration: { type: String },
    type: { type: String, enum: ["Live", "Self-Paced", "Hybrid"], default: "Self-Paced" },
    course_duration_in_months: { type: Number }, 
    size: { type: Number }, 
  },
  { timestamps: true }
);

export const CourseModel = mongoose.model("Course", CourseSchema);
