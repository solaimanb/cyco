import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../store/slices/categorySlice/categorySlice';
import './Categories.css';

const Categories = () => {
  const categoriesItem = [
    { genre: 'Action', name: 'Action Movies' },
    { genre: 'Comedy', name: 'Comedy Movies' },
    { genre: 'Drama', name: 'Drama Movies' },
    { genre: 'Sci-Fi', name: 'SciFi Movies' },
    { genre: 'Horror', name: 'Horror Movies' },
    { genre: 'Animation', name: 'Animation Movies' },
    { genre: 'Romantic', name: 'Romantic Movies' },
    { genre: 'Documentary', name: 'Documentary' },
    { genre: 'Classic', name: 'Classic Movies' },
    { genre: 'Adventure', name: 'Adventure Movies' },
  ];

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category?.genre));
  };

  return (
    <div className="sticky top-24 mt-14">
      <ul className="space-y-3">
        {categoriesItem.map((category, index) => (
          <button
            role="button"
            onClick={() => handleCategoryClick(category)}
            className="cyco-btn btn w-full h-full py-1 bg-zinc-800 border border-gray-200 rounded-sm"
            key={index}
          >
            {category?.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
