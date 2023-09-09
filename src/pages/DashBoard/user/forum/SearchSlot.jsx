import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterQueries,
  updateSearchQuery,
} from '../../../../store/slices/searchSlice/searchSlice';

const SearchSlot = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);
  // const [ queries ] = useForumQueries();
  // console.log(queries);

  const handleSearchBtnClick = () => {
    dispatch(filterQueries(searchQuery));
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    dispatch(updateSearchQuery(query));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(filterQueries(searchQuery));
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Search here..."
        className="p-1 w-full text-sm rounded-sm bg-zinc-800"
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        value={searchQuery}
      />
      <button
        onClick={handleSearchBtnClick}
        className="flex items-center gap-1 text-sm px-1 rounded-sm bg-zinc-800 border-b-2 border-r-2 border-cyred focus:border-r hover:border-r"
      >
        <FaSearch /> <span className="hidden md:flex">Search</span>
      </button>
    </div>
  );
};

export default SearchSlot;
