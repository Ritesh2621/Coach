import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Card = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/course"); // Your API endpoint
        const data = await response.json();
        setCourses(data); // Set the course data in state
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  if (!courses.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link to={`/course/${course._id}`}>
          <div
            key={course._id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200"
          >
            <div className="relative">
              <img
                className="w-full h-52 object-cover"
                src={course.course_image}
                alt="Course Thumbnail"
              />
              <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg">
                {course.category || "Category"}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {course.description.length > 200
                  ? `${course.description.slice(0, 200)}...`
                  : course.description}
              </p>

              <div className="flex items-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-700">
                  {course.rating}
                </span>
              </div>

              <button className="mt-4 w-full bg-blue-400 text-white text-sm font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 transition">
                Ready To Join?
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
