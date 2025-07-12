import React, { useEffect, useState } from 'react';
import Card from '../components/Cards';

const Task3 = () => {
  const [expandedCard, setExpandedCard] = useState('all');
  const [highlightSmallCards, setHighlightSmallCards] = useState(false);

  return (
    <div className="p-6 max-w-[1216px] mx-auto relative">
      <p className="text-left text-2xl text-gray-700 font-semibold mb-2">
        Explore our classes and master trending skills!
      </p>
      <h2 className="text-left text-gray-800 text-3xl md:text-4xl font-bold mb-6">
        Dive Into <span className="text-[#1DA077]">What's Hot Right Now!</span> 🔥
      </h2>

      <div className="flex gap-8 w-[1216px] flex-wrap">
        {/* Big red card*/}
        <Card
          isExpanded={expandedCard === 'all'}
          onClick={() => {
            setExpandedCard('all');
            setHighlightSmallCards(true);
            setTimeout(() => setHighlightSmallCards(false), 200);
          }}
          count="23"
          title="All Courses"
          subtitle="courses you’re powering through right now."
        />

        {/* Small cards */}
        <div className="flex gap-8">
          <Card
            isExpanded={expandedCard === 'upcoming'}
            onClick={() => setExpandedCard('upcoming')}
            count="05"
            title="Upcoming Courses"
            subtitle="exciting new courses waiting to boost your skills."
            showHoverArrow={true}
            bgColor={highlightSmallCards ? 'bg-blue-300 border-4 border-blue-400'  : ''}
          />
          <Card
            isExpanded={expandedCard === 'ongoing'}
            onClick={() => setExpandedCard('ongoing')}
            count="10"
            title="Ongoing Courses"
            subtitle="currently happening—don’t miss out on the action!"
            showHoverArrow={true}
            bgColor={highlightSmallCards ? 'bg-blue-300 border-4 border-blue-400'  : ''}
          />
        </div>
      </div>
    </div>
  );
};

export default Task3;
