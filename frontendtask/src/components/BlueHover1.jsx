import React from 'react';
import arrow from '../assets/Icon.png';
import bluehover1 from '../assets/bluehover-image1.png';
import bluehover2 from '../assets/bluehover-image2.png';



const BlueHover1 = () => {
  return (
    <div className="relative w-[595px] mb-6 h-[341px] bg-[#5492A0] rounded-3xl ">

    <div className="relative  w-[580px] h-[340px] overflow-hidden rounded-xl">
      <img src={bluehover1} alt="Red Decoration" className='absolute w-[572px] h-[329px] top-[40px] left-[80px] object-cover' />
    </div>

      <div className='absolute top-10 left-[75px] text-left'>
        <h1 className='text-2xl font-bold text-white'>Focused faces—learning
            <br /> mode: ON!</h1>
      </div>
      {/* Left notch */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center">
        <div className="w-15 h-15 ml-6 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-white/30 flex items-center justify-center">
          <img src={arrow} alt="Arrow" className="w-6 h-6 transform rotate-180" />
        </div>
      </div>
      {/* Right notch */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center">
        <div className="w-15 h-15 mr-6 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] border border-white/30 flex items-center justify-center">
          <img src={arrow} alt="Arrow" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default BlueHover1;
