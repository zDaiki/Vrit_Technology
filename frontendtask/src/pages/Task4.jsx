import React, { useState, useEffect } from 'react';

const numRows = 9;
const numCols = 26;

const frames = [
  [
    [4], [8], [6], [18], [22], [24], [26], [23], [20]  // frame 1
  ],
  [
    [20], [8], [20], [21], [22], [2], [26], [14], [2]  // frame 2
  ],
  [
    [15], [10], [22], [19], [23], [11], [23], [15], [13] // frame 3
  ],
  [
    [25], [22], [20], [3], [6], [14], [1], [26], [8]   // frame 4
  ]
];

const Task4 = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex(prev => (prev + 1) % frames.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          width: '100%'
        }}
      >
        {Array.from({ length: numRows }).map((_, rowIdx) =>
          Array.from({ length: numCols }).map((_, colIdx) => {
            const currentFrame = frames[frameIndex];
            const rowLitCols = currentFrame[rowIdx] || [];
            const isLit = rowLitCols.includes(colIdx + 1); 

            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`transition-all duration-500 ease-in-out border border-gray-600 box-border ${
                  isLit ? 'bg-purple-600 opacity-100' : 'bg-gray-300 opacity-10'
                }`}
                style={{ height: '75px' }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Task4;
