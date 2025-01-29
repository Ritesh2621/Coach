import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

const SuccessStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/story/")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-500">&#9733;</span> // Full star
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300">&#9733;</span> // Empty star
        ))}
      </>
    );
  };

  return (
    <>
    <div className="bg-blue-50">
   <div className="w-full h-[450px] bg-[#20617c] flex flex-col  justify-center">
    <div className="text-center text-4xl font-bold text-white ">Career Transformation</div>
     <div className="w-[93%] text-white font-semibold text-xl mx-auto mt-5">At LearnopediaX, we understand the power of real success stories from our learners. Watch these inspiring video testimonials and placement stories to hear directly from our proud learners about how they’ve elevated their careers with our guidance. Their journeys demonstrate the real impact we’ve had & how we can help you achieve your career goals too. Ready to take your career to the next level? Explore our programs and take the first step toward your career transformation today</div>
  <div className="flex items-center justify-center font-bold gap-4 w-[280px] mx-auto bg-green-700 border-4 border-[#12b7d2] h-16 text-white text-lg mt-14 p-5">Success Stories <FaArrowRightLong/></div>
   </div>
<div className="w-[85%] h-[150px] p-5 mx-auto text-lg">
 <p>
  Celebrating Success.
  </p>
  <p>
We believe that helping one student is helping one family helping one generation. At Coachx, we take pride in our student’s achievement and we're delighted to have played a part in their journey towards accomplishing their goals!
    </p> 
</div>


    <div className="w-[1000px] flex flex-wrap mx-auto gap-10 p-8 bg-blue-100 mb-4">
      {data.map((item, index) => {
        // Ensure item.rating is a valid number
        const rating = parseFloat(item.rating);

        return (
          <section
            key={index}
            className="p-4 border border-blue-300 w-[200px] rounded-2xl shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-full border-4 border-blue-300 mb-2 object-cover"
              />
              <div className="flex items-center gap-1 text-yellow-500">
                {renderStars(rating)}
                <span className="text-black font-semibold">
                  {isNaN(rating) ? "N/A" : rating.toFixed(1)} {/* Handle invalid ratings */}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-blue-600 text-sm font-medium">{item.role}</p>
            </div>
          </section>
        );
      })}
    </div>
    </div>
    </>
  );
};

export default SuccessStories;
