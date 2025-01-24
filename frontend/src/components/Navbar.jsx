import React, { useState } from "react";
import CourseDropdown from "./CourseDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="bg-[#002E3A] h-16 flex justify-between items-center px-6">
      {/* Logo Section */}
      <div className="flex items-center text-white text-xl font-bold">
        <span className="text-[#02adda]">Learnopedia</span>X
        <span className="text-[10px] text-[#75f2ac] ml-1">pvt Ltd</span>
      </div>


        <CourseDropdown />
      <div className="flex items-center gap-4">
        
      

        <button className="bg-[#ebfeff] text-[#002E3A] px-4 py-2 rounded-lg">
          Success Stories
        </button>
        <Link
         to='/login'
          className="bg-[#ebfeff] text-[#002E3A] px-4 py-2 rounded-lg"
        >
          User Login
        </Link>
      </div>

    
    </div>
  );
};

export default Navbar;