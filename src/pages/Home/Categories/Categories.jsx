import React from 'react';

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
    <div className="sticky top-5">
      <ul className='space-y-3'>
        {categoriesItem.map((category, index) => (
          <li className="btn w-full text-sm rounded-sm" key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
