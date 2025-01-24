import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [courses, setCourses] = useState([]); // State to store course data

  // Fetch courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/course");
        const data = await response.json();
        setCourses(data); // Set the fetched courses data
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Group courses by category
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSubMenuToggle = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null); // Close the submenu if it's already open
    } else {
      setActiveSubMenu(index); // Open the submenu for the clicked item
    }
  };

  const closeDropdowns = () => {
    setDropdownOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <div className="relative">
      <button
        className="bg-[#E6F9FF] text-[#002E3A] px-4 py-2 rounded-lg"
        onClick={toggleDropdown}
      >
        All Courses
      </button>


      {dropdownOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-[#212529] text-white shadow-lg rounded-lg w-56 z-10"
          onMouseLeave={closeDropdowns}
        >
          <ul className="flex flex-col">
            {Object.keys(groupedCourses).map((category, index) => (
              <li
                key={index}
                className="relative group hover:text-blue-500"
                onMouseEnter={() => setActiveSubMenu(index)} 
                onMouseLeave={() => setActiveSubMenu(null)} 
              >
           
                <button className="w-full text-left px-4 py-2 0 flex justify-between items-center cursor-pointer">
                  {category} 
                  <span className="ml-2 text-sm">▶️</span>
                </button>

                {activeSubMenu === index && groupedCourses[category] && (
                  <div className="absolute left-full top-0 mt-[-8px] bg-[#212529] shadow-lg rounded-lg w-[350px] z-20">
                    <ul className="flex flex-col">
                      {groupedCourses[category].map((course, subIndex) => (
                        <Link
                        to={`/course/${course._id}`}
                          key={subIndex}
                          className="px-4 py-2 text-white hover:text-blue-500 cursor-pointer"
                        >
                          {course.title} 
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseDropdown;
