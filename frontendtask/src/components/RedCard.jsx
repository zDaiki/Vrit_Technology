import React from 'react';

const RedCard = () => {
  return (
    <div className="flex flex-col justify-center items-end text-right 
                    bg-[#F45B5B] rounded-[32px] w-full h-full p-6 text-white">
      <h2 className="text-4xl font-bold  mb-4">Start with Clarity</h2>
      <p className="text-2xl font-medium mb-6">Step into a better learning path.</p>
      <p className="text-lg max-w-md">
        Overwhelmed by too many learning <br />
        options? SkillShikshya provides a clear, <br />
        curated roadmap from the start. Whether <br />
        you're a beginner or upskilling, we have a <br />
        path tailored to your growth.
      </p>
    </div>
  );
};

export default RedCard;
