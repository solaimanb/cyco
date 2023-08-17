import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import MovieCard from '../../components/movieCard/MovieCard';
import Pagination from '../../components/paginaition/Pagination';
import { useEffect } from 'react';

const Movies = () => {
  const [movies,setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  // const [movies, loading, refetch] = useMovies()
  // const movies = useMovies()
  
  // const [movies, setMovies] = useState([]);
  
  // useEffect(()=>{
  //   const fetchedMovies = async ()=>{
  //     const data = await useMovies();
  //     setMovies(data)
  //   }
  //   fetchedMovies()
  // },[])
  
  console.log(movies);

  const totalPages = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
useEffect(()=>{
  fetch('MoviesWithDetails.json')
  .then(res=>res.json())
  .then(data=>setMovies(data))
  
})
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
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie}></MovieCard>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Movies;
