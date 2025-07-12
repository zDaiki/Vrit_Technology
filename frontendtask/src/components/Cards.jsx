import React, { useState, useEffect } from 'react';
import icons from '../assets/icons.png';
import curlarrow from '../assets/curl-arrow.png';

const Card = ({
  isExpanded,
  onClick,
  bgColor,
  count,
  title,
  subtitle,
  showHoverArrow
}) => {
  const [animateReveal, setAnimateReveal] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setAnimateReveal(true);
      const timer = setTimeout(() => setAnimateReveal(false), 800); 
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  return (
    <div
      role="button"
      tabIndex={0}
      className={`relative rounded-[32px] p-6 transition-all duration-700 ease-in-out flex flex-col justify-between overflow-hidden cursor-pointer group ${
        isExpanded ? 'w-[592px] h-[461px] text-white bg-[#C33241]' : 'w-[280px] h-[461px] text-[#C33241] bg-[#F9EBEC]'
      } ${animateReveal ? 'reveal' : ''} ${bgColor}`}
      onClick={onClick}
    >
      {isExpanded ? (
        <>
          <div className="absolute top-9 right-10 text-md font-semibold cursor-pointer flex items-center gap-1 group">
            View all Courses{' '}
            <span className="text-xl animate-wiggle-horizontal">→</span>
          </div>
          <div className="mt-24 flex justify-center">
            <img src={icons} alt="Icons row" />
          </div>
          <div className="mb-5 ml-14 w-[442px] h-[138px]">
            <div className="relative flex items-end">
              <h2 className="text-[150px] font-extrabold leading-none">
                {count}
                <span className="absolute top-[-10px] left-[155px] text-6xl font-extrabold">+</span>
              </h2>
              <div className="ml-5 mb-6">
                <p className="text-3xl mb-3 font-semibold">{title}</p>
                <p className="text-md">{subtitle}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {showHoverArrow && (
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-gray-600 text-xs mb-1">Click me!</span>
              <img src={curlarrow} alt="arrow" className="w-12 h-12 rotate-[25deg]" />
            </div>
          )}
          <div className="transform -rotate-90 text-center mt-24 mr-10 leading-none">
            <h1 className="text-[32px] font-bold text-left">{title}</h1>
            <p className="text-left text-md font-semibold mt-4">{subtitle}</p>
          </div>
          <div className="text-[150px] mb-4 font-bold leading-none">
            {count}
            <span className="text-6xl align-top ml-1 transition-transform duration-300 group-hover:translate-x-1">+</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
