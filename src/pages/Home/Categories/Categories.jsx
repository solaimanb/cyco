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
        'Classic Movies'
      ];
    return (
        <div>
      <h2>TV Channel</h2>
      <ul>
        {categoriesItem.map((category, index) => (
          <li className='Categorybtn' key={index}>{category}</li>
        ))}
      </ul>
    </div>
    );
};

export default Categories;