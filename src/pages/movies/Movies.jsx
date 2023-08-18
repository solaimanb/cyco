import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "../../components/movieCard/MovieCard";
import Pagination from "../../components/paginaition/Pagination";
import { useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;
  

  const totalPages = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleNumberClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    fetch("MoviesWithDetails.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  });
  // there will be spinner
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3 justify-center">
        <input
          type="search"
          className="rounded-full px-3 py-2 w-[30%]"
          placeholder="Search movies"
        />
        <FaSearch size={22} />
      </div>

      <div className="mt-10 w-full flex justify-center flex-wrap gap-1">
        {movies
          .slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)
          .map((movie, index) => (
            <MovieCard key={index} movie={movie}></MovieCard>
          ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(movies.length / moviesPerPage)}
        onPageChange={handlePageChange}
        onNumberClick={handleNumberClick}
      />
    </div>
  );
};

export default Movies;
