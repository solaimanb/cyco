import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchSlot = () => {
  const handleSearch = () => {};

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Search here..."
        // value={searchTerm}
        // onChange={handleInputChange}
        className="p-1 w-full text-sm rounded-sm bg-zinc-800"
      />
      <button
        onClick={handleSearch}
        className="flex items-center gap-1 text-sm px-1 rounded-sm bg-zinc-800 border-b-2 border-r-2 border-cyred focus:border-r hover:border-r"
      >
        <FaSearch /> <span className='hidden md:flex'>Search</span>
      </button>
    </div>
  );
};

export default SearchSlot;
