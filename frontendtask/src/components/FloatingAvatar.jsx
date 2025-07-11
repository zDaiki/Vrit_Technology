import React from 'react';

const FloatingAvatar = ({ 
  src, 
  alt, 
  extraClasses, 
  onHover, 
  hovered, 
  tooltip 
}) => (
  <div
    className={`absolute w-20 h-20 rounded-3xl overflow-hidden shadow-md transition-all duration-500 
      ${extraClasses} ${hovered ? 'neon-glow' : ''}`}
    onMouseEnter={onHover?.onEnter}
    onMouseLeave={onHover?.onLeave}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    {tooltip}
  </div>
);

export default FloatingAvatar;
