import React from 'react';

const GradientOverlay = ({ position = 'top-left' }) => {
  const baseClasses = 'absolute w-[500px] h-[500px] rounded-full opacity-40 blur-2xl z-0';
  const positionClass =
    position === 'top-left'
      ? 'top-10 left-20'
      : position === 'bottom-right'
      ? 'bottom-0 right-1'
      : '';

  return (
    <div
      className={`${baseClasses} ${positionClass} bg-gradient-to-br from-green-200 via-green-100 to-white`}
    />
  );
};

export default GradientOverlay;
