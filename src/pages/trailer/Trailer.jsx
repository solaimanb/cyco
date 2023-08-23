import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import TrailerCard from '../../components/trailerCard/TrailerCard';
import useMovies from '../../hooks/useMovies';
import { Link } from 'react-router-dom';

const Trailer = () => {
  const [movies] = useMovies();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = movies?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(movies.length / recordsPerPage);
  const numbers = [...Array(npage + 1)?.keys()]?.slice(1);

  function prePage() {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage != npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changePage(id) {
    setCurrentPage(id);
  }

  const searchHandle = async () => {
    setCurrentPage(1);
    setIsSearchClicked(true);
    const moviesMatchingSearch = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(moviesMatchingSearch);
  };

  return (
    <>
      <div className="flex items-center gap-3 justify-center mt-10">
        <input
          type="search"
          className="rounded-full px-3 py-2 w-[30%]"
          placeholder="Search for Trailer"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <FaSearch size={22} onClick={searchHandle} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
      {isSearchClicked && filteredMovies.length === 0 ? (
        <div>No results found.</div>
      ) : searchQuery && isSearchClicked ? (
        filteredMovies?.map((movie, index) => (
          <Link to={`/trailer/${index}`} key={index}>
            <TrailerCard movie={movie} index={index} />
          </Link>
        ))
      ) : (
        records?.map((movie, index) => (
          <Link to={`/trailer/${index}`} key={index}>
            <TrailerCard movie={movie} index={index} />
          </Link>
        ))
      )}
    </div>

      {/* Pagination */}
      <nav>
        <ul className="flex justify-center space-x-2 mt-4">
          <li>
            <button
              className={`bg-gray-800 px-2 py-1 rounded ${
                currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={prePage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li key={i}>
              <button
                className={`bg-red-500 text-white px-2 py-1 rounded ${
                  currentPage === n ? 'bg-red-700' : ''
                }`}
                onClick={() => changePage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`bg-gray-800 px-2 py-1 rounded ${
                currentPage === npage ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={nextPage}
              disabled={currentPage === npage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Trailer;
