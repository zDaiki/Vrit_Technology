import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-[99999]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">My Tasks</div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Task 1</Link>
          <Link to="/task2" className="text-gray-700 hover:text-blue-500">Task 2</Link>
          <Link to="/task3" className="text-gray-700 hover:text-blue-500">Task 3</Link>
          <Link to="/task4" className="text-gray-700 hover:text-blue-500">Task 4</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
