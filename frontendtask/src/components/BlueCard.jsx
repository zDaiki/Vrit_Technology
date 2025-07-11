import React from 'react';

const BlueCard = () => {
  return (
    <div className="flex flex-col justify-center items-start text-left 
                    bg-[#5492A0] rounded-[32px] w-[595px] h-[341px] p-6 text-white">
      <h2 className="text-4xl font-bold mb-4">Learn by Doing</h2>
      <p className="text-2xl font-medium mb-6">Practical skills, real projects.</p>
      <p className="text-lg max-w-md">
        Theory is great, but action is better. At <br />
        SkillShikshya, you learn by doing. Hands-on <br />
         projects and real-world scenarios help you <br />
         build, break, and create—leading to <br />
          mastery.
      </p>
    </div>
  );
};

export default BlueCard;
