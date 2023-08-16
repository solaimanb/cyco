import React from 'react';
import './Categories.css';

const Categories = () => {
  const categoriesItem = [
    'Action Movies',
    'Comedy Movies',
    'Drama Movies',
    'Science Fiction Movies',
    'Horror Movies',
    'Animated Movies',
    'Romantic Movies',
    'Documentary Films',
    'TV Shows',
    'Classic Movies',
  ];
  return (
    <div className="sticky top-24">
      <ul className="space-y-3">
        {categoriesItem.map((category, index) => (
          <li
            role="button"
            className="cyco-btn btn w-full h-full py-1 bg-zinc-800 border border-gray-200 rounded-sm"
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
