import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import OurStudent from "../assets/OurStudent.jpeg";  // Image import
import CourseDropdown from "./CourseDropdown"; // Import the new component
import Card from "./Card";
import whatsapp from "../assets/whatsapp.png";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);

  const handleWhatsAppChat = () => {
    const phoneNumber = "8484845774";
    const message = "Hello! I have a question about your services."; // Default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#f2fcff]">
      <div className={`bg-[#005068] h-[400px] p-3 ${showForm ? "blur-md" : ""}`}>
        <div className="ml-16 mt-6">
          <p className="text-white mb-3">IIT Mumbai Alumni Initiative</p>
          <p className="text-[#02adda] text-xl mb-3 font-bold">
            Chasing Dreams Made Simple
          </p>
          <div className="text-5xl font-sans font-bold text-white mb-6">
            <p>Master Any Skill</p>
            <p>From Industry Experts</p>
          </div>
          <div className="text-white text-lg">
            <p>
              Explore plethora of{" "}
              <span className="bg-white text-black px-3 rounded-lg">
                High Paying-Job Oriented
              </span>{" "}
              courses and
            </p>
            <p>achieve your career goals easily with CoachX.Live today!</p>
          </div>
          <button
            onClick={handleFormOpen}
            className="my-5 bg-white p-4 w-[250px] text-xl font-semibold border-4 border-[#12b7d2] flex justify-around items-center hover:bg-[#005068] hover:text-white hover:border-[#75f2ac]"
          >
            Talk To An Expert <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* Conditional Form Section */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg p-6 rounded-lg w-[650px] relative">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col items-center">
                <FaPhoneAlt className="text-[#005068] text-2xl mb-2" />
                <p className="text-lg font-semibold">+91-7378757330</p>
              </div>
              <p className="text-gray-500 text-lg font-semibold">OR</p>
              <button className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold">
                <FaWhatsapp className="text-xl" /> WhatsApp Us
              </button>
            </div>
            <p className="text-center font-bold text-xl mb-4">
              Request Call Back
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Contact No.*"
                className="w-full p-2 border rounded-lg"
                required
              />
              <select className="w-full p-2 border rounded-lg" required>
                <option value="">Select Course</option>
                <option value="course1">Business Analytics</option>
                <option value="course2">Data Engineering</option>
                <option value="course3">Data Science</option>
                <option value="course4">Data Analytics</option>
                <option value="course5">Cloud Computing</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#005068] text-white py-2 rounded-lg font-semibold hover:bg-[#12b7d2]"
              >
                Submit
              </button>
            </form>
            <button
              onClick={handleFormClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}

      <div className={`px-24 mt-9 ${showForm ? "blur-md" : ""}`}>
        <p className="text-black text-3xl text-center font-bold">
          Our Students Work At
        </p>
        <img
          src={OurStudent} 
          alt="Our Students"
          className="h-[1200px] object-contain"
        />
        <div>
  <h5>Home - Course</h5>
    <Card/>
        </div>
      </div>
      <button
        onClick={handleWhatsAppChat}
        className="fixed bottom-5 right-5 bg-green-700 text-white p-1.5 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-14 h-14" />
      </button>
    </div>
  );
};

export default Home;
