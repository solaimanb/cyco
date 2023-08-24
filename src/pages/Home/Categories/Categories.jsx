import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const categoriesItem = [
    { to: 'action-movies', name: 'Action Movies' },
    { to: 'comedy-movies', name: 'Comedy Movies' },
    { to: 'drama-movies', name: 'Drama Movies' },
    { to: 'scifi-movies', name: 'SciFi Movies' },
    { to: 'horror-movies', name: 'Horror Movies' },
    { to: 'animated-movies', name: 'Animated Movies' },
    { to: 'romantic-movies', name: 'Romantic Movies' },
    { to: 'documentary-movies', name: 'Documentary Films' },
    { to: 'tv-shows', name: 'TV Shows' },
    { to: 'classic-movies', name: 'Classic Movies' },
  ];
  return (
    <div className="sticky top-24 mt-14">
      <ul className="space-y-3">
        {categoriesItem.map((category, index) => (
          <Link
            to={category?.to}
            role="button"
            className="cyco-btn btn w-full h-full py-1 bg-zinc-800 border border-gray-200 rounded-sm"
            key={index}
          >
            {category?.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
