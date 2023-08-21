import React, { useState } from 'react';
import TrailerCard from '../../components/trailerCard/TrailerCard';
import useMovies from '../../hooks/useMovies';

const Trailer = () => {
  const [movies] = useMovies();
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {records?.map((movie, index) => (
          <TrailerCard key={index} movie={movie} />
        ))}
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
