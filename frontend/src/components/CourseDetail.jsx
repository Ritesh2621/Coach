import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const features = [
    { text: '100% Live Interactive Learning', icon: '👥' },
    { text: '100% Placement Assistance', icon: '🎓' },
    { text: 'Complete Session Recordings', icon: '📹' },
    { text: 'Industry Recognized Certificate Upon Course Completion', icon: '📜' },
    { text: 'Easy EMI Payment Options', icon: '💳' },
    { text: '24 X 7 Lifetime Support', icon: '🎧' },
    { text: 'Hands-On Project Based Learning', icon: '🛠️' },
    { text: 'Interview Preparation Guidance', icon: '👍' },
    { text: 'LinkedIn Profile Building Guidance', icon: '🔗' },
  ];
  const { id } = useParams();  // Get the course ID from the URL parameter
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await fetch(`http://localhost:4000/course/course/${id}`);  // Fetch course data by ID
        const data = await response.json();
        setCourse(data);  // Set the fetched course data in state
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetail();
  }, [id]);  

  if (!course) {
    return <div>Loading...</div>;
  }

  // Parse the syllabus JSON string (if it's a string)
  let syllabus = {};
  try {
    syllabus = typeof course.syllabus === 'string' ? JSON.parse(course.syllabus) : course.syllabus;
  } catch (error) {
    console.error('Error parsing syllabus JSON:', error);
  }

  return (
    <div className="course-detail-container flex flex-col items-center bg-[#f2fcff]">
      <div className='w-[65%] p-4'>
        <h5 className='my-2'>Home - Course - {course.category} - {course.title}</h5>
        <h2 className="text-3xl font-bold ">{course.title}</h2>

        <p className='my-2'>{course.summary || 'No summary available.'}</p>

        <div className="flex flex-col md:flex-row bg-[#f2fcff] p-4 my-4">
          {/* Left Section */}
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white p-6 rounded-lg flex-1">
            <h2 className="text-2xl font-bold mb-4">
              Professional Certification Program In
            </h2>
            <h1 className="text-4xl font-extrabold text-pink-400">
              {course.title}
            </h1>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <img src="icon1.png" alt="icon" className="w-6 h-6 mr-2" />
                <span>100% Placement Assistance</span>
              </li>
              <li className="flex items-center">
                <img src="icon2.png" alt="icon" className="w-6 h-6 mr-2" />
                <span>Convenient Weekend Timings</span>
              </li>
              <li className="flex items-center">
                <img src="icon3.png" alt="icon" className="w-6 h-6 mr-2" />
                <span>Get Hired by Top Organizations</span>
              </li>
            </ul>
            <button className="mt-8 bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600">
              Join Now
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg flex-1 mt-6 md:mt-0 md:ml-4">
            <h3 className="text-xl font-bold mb-4">Course Highlights</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Live sessions</span>
                <span className="font-bold">{course.session_count}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Batch Schedule</span>
                <a href="#" className="text-blue-500 underline">
                  Upcoming Batch
                </a>
              </div>
              <div className='my-3'>
                <span className="block mb-2">Days Of The Week</span>
                <div className="flex space-x-2 my-3">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <span
                      key={index}
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        day === "S"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Mode Of Delivery</span>
                <span className="font-semibold">Live Sessions</span>
              </div>
              <div className="flex justify-between items-center my-3">
                <span>Language</span>
                <span className="font-semibold">English</span>
              </div>
            </div>
            <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full">
              Register Now
            </button>
          </div>
        </div>

        {/* About Course */}
        <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-row justify-around my-6">
          <div className="w-[500px]">
            <h2 className="text-2xl font-bold text-[#063343] mb-4">About Course</h2>
            <p className="text-gray-700 mb-6">
              {course.description}
            </p>

            <div className="gap-4">
              <div className="flex items-center mb-2">
                <span className="text-xl text-blue-900 mr-2">📅</span>
                <span className="font-semibold text-gray-700">Days Of The Week</span>
              </div>

              <div className="flex items-center gap-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${day === "S" ? "bg-[#02adda] text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <div className="mb-4">
              <p className="text-gray-700 font-medium my-2">
                <span className="text-blue-900 font-bold">📊 Level :</span> Beginner Level
              </p>
              <p className="text-gray-700 font-medium my-2">
                <span className="text-blue-900 font-bold">🎥 Live Session :</span> 15
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-medium my-2">
                <span className="text-blue-900 font-bold">⏱️ Time :</span> 120 each
              </p>
              <p className="text-gray-700 font-medium">
                <span className="text-blue-900 font-bold">🌐 Language :</span> English
              </p>
              <p className="text-gray-700 font-medium my-2">
                <span className="text-blue-900 font-bold">🎓 Certificate :</span> Certificate of Completion
              </p>
            </div>
          </div>
        </div>

        {/* Syllabus Section */}
        <div className="syllabus-section py-6">
          <h3 className="text-2xl font-bold mb-4">Course Syllabus</h3>
          {syllabus.modules && syllabus.modules.map((module, index) => (
            <div key={index} className="module mb-6">
              <h4 className="text-xl font-semibold">{module.module}</h4>
              <ul className="list-disc pl-6">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="text-lg text-gray-700">{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-10">
          <h2 className="text-center text-2xl font-semibold mb-6">Key Course Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4"
              >
                <div className="text-blue-500 text-3xl">{feature.icon}</div>
                <p className="text-gray-700 font-normal">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
