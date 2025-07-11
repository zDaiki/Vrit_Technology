import React, { useState } from 'react';
import '../index.css';

import icons from '../assets/icons.png';
import curlarrow from '../assets/curl-arrow.png';

const Task3 = () => {

  const [selected, setSelected] = useState(false);


  return (
    <div className="p-6 max-w-[1216px] mx-auto">
      {/* Top texts */}
      <p className="text-left text-2xl text-gray-700 font-semibold mb-2">
        Explore our classes and master trending skills!
      </p>
      <h2 className="text-left text-gray-800 text-3xl md:text-4xl font-bold mb-6">
        Dive Into <span className="text-[#1DA077]">What's Hot Right Now!</span> 🔥
      </h2>

      {/* Cards row */}
      <div className="flex gap-8 w-[1216px] flex-wrap">
        
        <div className="bg-[#C33241] rounded-[32px] text-white p-6 w-[592px] h-[461px] relative overflow-hidden flex flex-col justify-between">
         
          <div className="absolute top-9 right-10 text-md font-semibold cursor-pointer flex items-center gap-1 group"
          onClick={() => {
            setSelected(true);
            setTimeout(() => setSelected(false), 200);
          }}>
            View all Courses  <span className="text-xl animate-wiggle-horizontal">→</span>
          </div>

          {/* Icons row */}
          <div className="mt-24 flex justify-center">
            <img src={icons} alt="Icons row"/>
          </div>

          {/* Number and All Courses in same row */}
          <div className="mb-5 ml-14 w-[442px] h-[138px]">
            <div className="relative flex items-end">
              <h2 className="text-[150px] font-extrabold leading-none">
                23<span className="absolute top-[-10px] left-[155px] text-6xl font-extrabold">+</span>
              </h2>
              <div className="ml-5 mb-6">
                <p className="text-3xl mb-3 font-semibold">All Courses</p>
                <p className="text-md">courses you’re powering <br /> through right now.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right two small cards */}
        <div className="flex gap-8">
          <div className={`bg-[#F9EBEC] text-[#C33241] rounded-2xl p-4 w-[280px] h-[461px] flex flex-col justify-between items-center transition-all duration-300 group ${selected ? 'bg-blue-100 ring-1 ring-emerald-500' : ''}`}>
            <img
            src={curlarrow}
            alt="arrow"
            className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8"
          />
            <div className="transform -rotate-90 text-center mt-24 mr-10 leading-none">
              <h1 className='text-[32px] font-bold text-left'>Upcoming Courses</h1>
              <p className='text-left text-md font-semibold mt-4'>exciting new courses waiting to boost your skills.</p>
            </div>
            <div className="text-[150px] mb-4 font-bold leading-none">05<span className="text-6xl align-top ml-1 transition-transform duration-300 group-hover:translate-x-1">+</span></div>
          </div>
  
          <div className={`bg-[#F9EBEC] text-[#C33241] rounded-2xl p-4 w-[280px] h-[461px] flex flex-col justify-between items-center transition-all duration-300 ${selected ? 'bg-blue-100 ring-1 ring-emerald-500' : ''}`}>
            <div className="transform -rotate-90 text-center mt-24 mr-10 leading-none">
              <h1 className='text-[32px] font-bold text-left'>Ongoing Courses</h1>
              <p className='text-left text-md font-semibold mt-4'>currently happening—don’t miss out on the action!</p>
            </div>
            <div className="text-[150px] mb-4 font-bold leading-none">10<span className="text-6xl align-top">+</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task3;
