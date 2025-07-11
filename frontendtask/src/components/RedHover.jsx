import React from 'react';
import arrow from '../assets/Icon.png';
import newredimage from '../assets/newred-image.png';
import shadow from '../assets/shadow.png';
import wow from '../assets/wow.png';


const RedHover = () => {
  return (
    <div className="relative w-[595px] mb-6 h-[341px] bg-[#FF6B6B] rounded-3xl">
      <img src={shadow} alt="Red Decoration" className="absolute w-[352px] h-[323px]  top-5 ml-5" />
      <img src={newredimage} alt="Red Decoration" className="absolute w-[352px] h-[323px] top-5 left-0.5" />
      <img src={wow} alt="wow" className="absolute w-[88px] h-[88px] top-9 ml-15" />
      <img src={wow} alt="wow" className="absolute w-[88px] h-[88px] top-40 ml-96 rotate-12 scale-x-[-1]" />
      
      <div className='absolute top-10 left-72 text-right'>
        <h1 className='text-2xl font-bold text-white'>Clarity unlocked—<br />
        stickers, sips, and skills <br />
        all in one go!</h1>
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

export default RedHover;
