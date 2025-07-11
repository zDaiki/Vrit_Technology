import React from 'react';

const PurpleCard = () => {
  return (
    <div className="flex flex-col justify-center items-end text-right 
                    bg-[#6C64A8] rounded-[32px] w-full h-full p-6 text-white">
      <h2 className="text-4xl font-bold  mb-4">Get Mentored & Supported</h2>
      <p className="text-2xl font-medium mb-6">You're not learning alone.</p>
      <p className="text-lg max-w-md">
        Stuck or need feedback? SkillShikshya’s <br />
        community of mentors and learners <br />
         has your back with live support, <br />
          interactive discussions, and expert <br />
           insights. You’re never on your own.
      </p>
    </div>
  );
};

export default PurpleCard;
