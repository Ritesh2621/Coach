import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import OurStudent from '../assets/OurStudent.jpeg'
import Img2 from '../assets/Img2.png'
import Img3 from '../assets/Img3.png'


const Home = () => {
  return (
    <div className='bg-[#f2fcff]'>
    <div className='bg-[#005068] h-[400px] p-3 '>
      <div className='ml-16 mt-6'>
      <p className='text-white mb-3'>
         IIT Mumbai Alumni Initiative
      </p>

<p className='text-[#02adda] text-xl mb-3 font-bold'>
  Chasing Dreams Made Simple
</p>
  <div className='text-5xl font-sans font-bold text-white mb-6'>
 <p>
 Master Any Skill
  </p>  
  <p className=''>
   From Industry Experts
  </p>
  </div>


<div className='text-white text-lg'>
<p>Explore plethora of <span className='bg-white text-black  px-3 rounded-lg'>High Paying-Job Oriented</span> courses and</p>
<p>
  achieve your career goals easily with CoachX.Live today!
  </p> 
</div>

<button className='my-5 bg-white p-4 w-[250px] text-xl font-semibold border-4 border-[#12b7d2] flex justify-around items-center hover:bg-[#005068] hover:text-white hover:border-[#75f2ac]'>Talk To An Expert <FaArrowRightLong /></button>


    </div>
    </div>
    
    <div className='px-24   mt-9'>
      <p className='text-black text-3xl text-center font-bold'>Our Students Work At</p>
    <img src={OurStudent} alt="" className='h-[1200px]  object-contain ' />
    </div>
   
    </div>
  )
}

export default Home