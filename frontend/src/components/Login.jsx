import React from 'react'

const Login = () => {
  return (
    <>
            
          <div className="bg-white shadow-lg p-10 rounded-lg w-full">
            {/* Section Title */}
            <p className="text-center font-bold text-2xl mb-4">
              Achieve Your Career Goals With Learnopedia Pvt Ltd
            </p>

            {/* Why Learnopedia Section */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
              <div className="flex items-start space-x-2">
                <span>📡</span>
                <p>Live Classes Where You Can Interact With Your Mentors</p>
              </div>
              <div className="flex items-start space-x-2">
                <span>📝</span>
                <p>Get Recordings And Notes Of The Classes For Easy Learning</p>
              </div>
              <div className="flex items-start space-x-2">
                <span>🏫</span>
                <p>Real Classroom-Like Environment, Learn With Your Peers</p>
              </div>
              <div className="flex items-start space-x-2">
                <span>💡</span>
                <p>Doubt Clearing Sessions, Real-Time Assessments</p>
              </div>
              <div className="flex items-start space-x-2">
                <span>📜</span>
                <p>Digital Certificates After The Completion Of The Course</p>
              </div>
              <div className="flex items-start space-x-2">
                <span>📈</span>
                <p>Detailed Learning Paths & Complete Placement Assistance</p>
              </div>
            </div>

            {/* Login Form */}
            <div className="mt-4">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                    <option value="">Select your course</option>
                    <option value="course1">Business Analytics</option>
                    <option value="course2">Data Engineering</option>
                    <option value="course3">Data Science</option>
                    <option value="course4">Data Analytics</option>
                    <option value="course5">Cloud Computing</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-[#02adda] text-white px-4 py-2 rounded-lg w-full hover:bg-[#028a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02adda]"
                >
                  Submit
                </button>
              </form>
            </div>

          
          </div>
      
    
    </>
  )
}

export default Login