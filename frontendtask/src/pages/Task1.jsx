import React, { useState } from 'react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import tooltip from '../assets/Tooltip.png';
import TestimonialCard from '../components/TestimonialCard';


import happy from '../assets/happy.gif';
import like from '../assets/like.gif';
import likess from '../assets/likess.gif';
import trophy from '../assets/trophy.gif';
import GradientOverlay from '../components/GradientOverlay';

const Task1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImage1, setHoveredImage1] = useState(false);
  const [animateImage1, setAnimateImage1] = useState('');

  const [hoveredImage4, setHoveredImage4] = useState(false);
   const [animateImage4, setAnimateImage4] = useState('');

  const [showAmazing, setShowAmazing] = useState(false);

  React.useEffect(() => {
  const interval = setInterval(() => {
    setShowAmazing(prev => !prev);
  }, 3000); 
  return () => clearInterval(interval); 
  }, []);
  const handleImage1Enter = () => {
    setHoveredImage1(true);
    setAnimateImage1('fade-zoom-in');
  };

  const handleImage1Leave = () => {
    setAnimateImage1('fade-zoom-out');
    setHoveredImage1(false); 
  };

  const handleImage4Enter = () => {
    setHoveredImage4(true);
    setAnimateImage4('fade-zoom-in');
  };

  const handleImage4Leave = () => {
    setAnimateImage4('fade-zoom-out');
    setHoveredImage4(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="relative w-[1400px] h-[650px] mx-auto flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GradientOverlay position="top-left" />
        <GradientOverlay position="bottom-right" />
        {hoveredImage1 && (
          <div className={`absolute top-[140px] left-[430px] -translate-x-1/2 mt-2 z-50 ${animateImage1}`}>
            <TestimonialCard
              userName="Rajesh Dhakal"
              userRole="Digital Marketing Student"
              message="I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I have recommended the same course to my data-enthusiast friends."
            />
          </div>
        )}
        {hoveredImage4 && (
          <div className={`absolute top-[260px] right-[230px] -translate-x-1/2 mt-2 z-50 ${animateImage4}`}>
            <img src={tooltip} alt="Tooltip" className="w-50 h-auto rounded-md" />
          </div>
        )}

        <div className="relative w-[500px] h-[350px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <p className="text-[#414141] mb-1 whitespace-nowrap text-lg">
              Hear How They Level Up Their Game!
            </p>
            <h2 className="text-3xl  text-[#2B2B2B] font-bold whitespace-nowrap">
              Skill <span className="text-[#1DA077]">Masters</span> Unite!🤝
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              <a
                href="#"
                className="flex items-center justify-center gap-1 font-medium text-black hover:text-green-600"
              >
                View all Testimonials <span>→</span>
              </a>
            </p>
          </div>

          <div
            className={`absolute top-5 left-30 w-20 h-20 rounded-3xl overflow-visible shadow-md transition-all duration-500 ${
                isHovered ? 'translate-x-[-180px] translate-y-[-80px] floating1' : ''
            } ${
                hoveredImage1 ? 'neon-glow' : ''}`}
            onMouseEnter={handleImage1Enter}
            onMouseLeave={handleImage1Leave}
          >
            <img src={image1} alt="User 1" className="w-full h-full object-cover rounded-3xl" />
            {showAmazing && (
                <div className="absolute left-[70px] top-1/2 -translate-y-1/2 w-37 ml-2 px-2 py-3 rounded-xl bg-white text-gray-800  flex items-center space-x-2 shadow-md animate-fade z-[9999]">
                    <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white" />  
                    <span className='text-xs'>Amazing</span>
                    <span className="text-yellow-400 text-xs">⭐⭐⭐⭐⭐</span>
                </div>
            )}
            
          </div>

          <div
            className={`absolute top-5 left-85 -translate-x-1/2 w-20 h-20 rounded-3xl overflow-hidden shadow-md transition-all duration-500 ${
              isHovered ? 'translate-x-[120px] translate-y-[-100px] floating2' : ''
            }`}
          >
            <img src={image2} alt="User 2" className="w-full h-full object-cover" />
          </div>

          <div
            className={`absolute top-[115px] left-105 w-20 h-20 rounded-3xl overflow-hidden shadow-md transition-all duration-500 ${
              isHovered ? 'translate-x-[180px] translate-y-[-0px] floating3' : ''
            }`}
          >
            <img src={image3} alt="User 3" className="w-full h-full object-cover" />
          </div>

          <div
            className={`absolute bottom-5 left-30 w-20 h-20 rounded-3xl overflow-hidden shadow-md z-207 transition-all duration-500 ${
              isHovered ? 'translate-x-[-180px] translate-y-[100px] floating4' : ''
            }`}
          >
            <img src={image5} alt="User 4" className="w-full h-full object-cover" />
          </div>

           <div
                className={`absolute bottom-5 right-30 w-20 h-20 rounded-3xl overflow-visible shadow-md transition-all duration-500 ${
                    isHovered ? 'translate-x-[180px] translate-y-[120px] floating1' : ''
                } ${hoveredImage4 ? 'neon-glow' : ''}`}
                onMouseEnter={handleImage4Enter}
                onMouseLeave={handleImage4Leave}
                >
                <img src={image4} alt="User 5" className="w-full h-full object-cover rounded-3xl" />
                {showAmazing && (
                <div className="absolute left-[65px] top-1/2 -translate-y-1/2 w-25 ml-2 px-2 py-3 rounded-xl bg-white text-gray-800  flex items-center space-x-2 shadow-md animate-fade z-[9999]">
                    <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white" />  
                    <span className="text-yellow-400 text-xs">⭐⭐⭐⭐⭐</span>
                </div>
            )}
            </div>

          <div
            className={`absolute top-[115px] left-0 w-20 h-20 rounded-2xl overflow-hidden shadow-md z-20 transition-all duration-500 ${
              isHovered ? 'translate-x-[-190px] translate-y-[0px] floating2' : ''}`}
          >
            <img src={image6} alt="User 6" className="w-full h-full object-cover" />
          </div>

          {/* GIF Icons */}
          <div
            className={`absolute top-[25px] left-1/2 -translate-x-1/2 w-19 h-19 z-20 transition-all duration-500 ${
              isHovered ? 'translate-x-[-80px] translate-y-[-100px] rotate-6 floating3' : ''
            }`}
          >
            <img src={like} alt="Like" className="w-full h-full object-contain" />
          </div>

          <div
            className={`absolute top-[195px] left-[60px] w-19 h-19 transition-all duration-500 ${
              isHovered ? 'translate-x-[-250px] translate-y-[80px] rotate-6 floating4' : ''
            }`}
          >
            <img src={happy} alt="Happy" className="w-full h-full object-contain" />
          </div>

          <div
            className={`absolute top-[200px] left-[380px] w-19 h-19 z-20 transition-all duration-500 ${
              isHovered ? 'translate-x-[250px] translate-y-[70px] rotate-6 floating1' : ''
            }`}
          >
            <img src={likess} alt="Likes" className="w-full h-full object-contain" />
          </div>

          <div
            className={`absolute top-[250px] right-[210px] w-19 h-19 z-20 transition-all duration-500 ${
              isHovered ? 'translate-x-[0px] translate-y-[150px] rotate-6 floating2' : ''
            }`}
          >
            <img src={trophy} alt="Trophy" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1;
