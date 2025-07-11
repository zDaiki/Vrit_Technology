import React, { useState } from 'react';
import ClarityBanner from '../components/RedCard';

import redFrame from '../assets/Frame 20.png';
import redframeBoy from '../assets/red_box-boy.png';
import blueframe from '../assets/Frameblue.png';
import blueframeboy from '../assets/blue_box_boy.png';
import purpleframe from '../assets/Framepurple.png';
import purpleframegirl from '../assets/purpleGirl.png';
import brownframe from '../assets/framebrown.png';
import brownframeboy from '../assets/brownBoy.png';

import redcard from '../assets/redcard.png';
import bluefirst from '../assets/blueFirst.png';
import bluesecond from '../assets/blueSecond.png';
import RedCard from '../components/RedCard';
import BlueCard from '../components/BlueCard';
import PurpleCard from '../components/PurpleCard';
import BrownCard from '../components/BrownCard';

import RedHover from '../components/RedHover';
import BlueHover1 from '../components/BlueHover1';
import BlueHover2 from '../components/BlueHover2';


const cards = [
  { character: redframeBoy },
  { frame: blueframe, character: blueframeboy },
  { frame: purpleframe, character: purpleframegirl },
  { frame: brownframe, character: brownframeboy },
];

const Task2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [blueImage, setBlueImage] = useState(bluefirst);

  const [blueHoverComponent, setBlueHoverComponent] = useState('one');


  const handleBlueCardClick = (direction) => {
    if (direction === 'right') {
      setBlueHoverComponent('two');  // show second div
    } else {
      setBlueHoverComponent('one');  // show first div
    }
  };

  return (
    <section className="task2-wrapper px-4 py-10 max-w-6xl mx-auto ">
      <div className="mb-10 max-w-6xl mx-auto text-left">
      <p className="text-2xl text-gray-700 font-semibold mb-5">
        Your SkillShikshya Journey
      </p>
      <h2 className=" text-gray-800 text-3xl md:text-4xl font-bold mb-10">
        <span className="text-[#1DA077]">Step </span>In.{" "}
        <span className="text-[#1DA077]">Skill</span> Up.{" "}
        <span className="text-[#1DA077]">Stand</span> Out. 🚀
      </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-x-36 gap-y-8 justify-items-center text-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative text-white text-left rounded-2xl w-[595px] h-[341px]"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card 0 (redcard logic) */}
            {idx === 0 && (
              <div
                className={`absolute inset-0 z-0 rounded-2xl transition-opacity duration-[1600ms] ease-in-out ${
                  hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <RedHover/>
              </div>
            )}

            {/* Card 1 (bluefirst/bluesecond logic) */}
            {idx === 1 && (
              <div
                className={`absolute inset-0 z-0 rounded-2xl  transition-opacity duration-[1600ms] ease-in-out ${
                  hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {blueHoverComponent === 'one' ? <BlueHover1 /> : <BlueHover2 />}

                {/* Invisible Click Areas */}
                <div
                  className="absolute left-0 top-1/2 w-[50px] h-[20%] transform -translate-y-1/2 cursor-pointer z-10"
                  onClick={() => handleBlueCardClick('left')}
                ></div>

                <div
                  className="absolute right-0 top-1/2 w-[50px] h-[20%] transform -translate-y-1/2 cursor-pointer z-10"
                  onClick={() => handleBlueCardClick('right')}
                ></div>
              </div>
            )}

            {/* Frame / Custom div */}
              <div className={`w-full h-full relative z-10 transition-all duration-[1500ms] ease-in-out ${
                hoveredIndex === idx && idx <= 1
                  ? '-translate-x-[100vw] opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}>
                { idx ===0 ? (<RedCard />) : idx === 1 ? (<BlueCard/>) : idx === 2 ? (<PurpleCard/>) : (<BrownCard/>) }
              </div>
            

            {/* Character image */}
            <img
              src={card.character}
              alt={`character-${idx}`}
              className={`absolute z-[9999] transition-all duration-[1600ms] ease-in-out ${
                idx === 0 ? 'floating1' : idx === 1 ? 'floating2' : idx === 2 ? 'floating3' : 'floating4'
              } ${
                idx === 1
                  ? 'top-[5px] left-[340px] h-[400px] w-[240px]'
                  : idx === 2
                  ? 'top-[115px] left-[-80px] w-[360px] h-[280px]'
                  : idx === 3
                  ? 'top-[50px] left-[310px] w-[330px] h-[360px]'
                  : 'top-[50px] left-[-70px] w-[290px] h-[338.59px]'
              } ${
                hoveredIndex === idx && idx <= 1
                  ? '-translate-x-[100vw] opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Task2;
