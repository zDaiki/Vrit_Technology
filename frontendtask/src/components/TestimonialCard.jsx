import React from 'react';

const TestimonialCard = ({ userName, userRole, message }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 w-90 text-center border border-gray-100">
       <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-[8px] border-r-[8px] border-b-[8px] 
        border-l-transparent border-r-transparent border-b-white"></div>
      {/* Message */}
      <p className="text-gray-700 text-left text-xs  mb-3">
        “{message}”
      </p>

      {/* Name & role */}
      <h4 className="text-xs text-right font-semibold">{userName}</h4>
      <p className="text-xs text-right text-gray-500 mb-2">{userRole}</p>
    </div>
  );
};

export default TestimonialCard;
