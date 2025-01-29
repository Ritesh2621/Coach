import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = () => {
  const [courses, setCourses] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all courses or only 3
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/course"); // Your API endpoint
        const data = await response.json();
        setCourses(data); // Set the course data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin border-t-4 border-blue-600 border-solid rounded-full w-16 h-16 mb-4"></div>
          <p className="text-xl font-semibold text-gray-800">Loading Courses</p>
        </div>
      </div>
    );
  }
  // Slice the courses array to show only the first 3 courses if showAll is false
  const displayedCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {displayedCourses.map((course) => (
    <Link to={`/course/${course._id}`} key={course._id}>
      <div className="max-w-sm rounded-lg overflow-hidden h-[700px] shadow-lg bg-white border border-gray-200 flex flex-col">
        <div className="relative flex-grow">
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white p-8 rounded-2xl shadow-xl max-w-md mx-auto h-full">
            {/* AI Icon and Title */}
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-lg font-bold text-center">Professional Certification Program In</h1>
              <h2 className="text-2xl font-extrabold text-white">{course.title}</h2>
            </div>

            {/* Features */}
            <ul className="text-left space-y-4 mb-6">
              <li className="flex items-center space-x-2">
                <span>100% Placement Assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Convenient Weekend Timings</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Get Hired by Top Organizations</span>
              </li>
            </ul>

            <p className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition">
              JOIN NOW
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col justify-between flex-grow">
          <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
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


      <button
        onClick={() => setShowAll(!showAll)} // Toggle the state to show all courses or only 3
        className="flex justify-center items-center bg-[#063343] w-[600px] rounded-lg font-bold text-white text-2xl text-center ml-[400px] my-16 p-4"
      >
        {showAll ? "Show Less Courses" : "Explore More Courses"}
        <FaArrowRightLong className="ml-2 mt-1" />
      </button>
    </>
  );
};

export default Card;
