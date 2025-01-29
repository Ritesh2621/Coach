import React from "react";
import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="bg-[#002E3A] h-24 px-6 w-full">
      <div className="w-[90%] mx-auto ">
        <div className="flex justify-between items-center h-full text-white">
          {/* Left side content */}
          <div className="flex items-center gap-6 mt-6">
            <Link to="/" className="text-3xl">
            <span className="text-[#02adda]">Learnopedia</span>X
            </Link>
            <CourseDropdown/>
          </div>

          {/* Right side content */}
          <div className="flex items-center gap-4 mt-6">
            <Link to="/successStories" className="bg-[#ebfeff] text-[#002E3A] px-4 py-3 font-semibold gap-2 w-[170px] rounded-lg flex items-center">
              <BiSolidPhoneCall className="font-bold" />
              Success Stories
            </Link>
            <Link
              to="/login"
              className="bg-[#ebfeff] text-[#002E3A] px-4 py-3 font-semibold gap-2 w-[170px] rounded-lg flex items-center justify-center"
            >
              <SlPeople className="font-bold"/>
              User Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
