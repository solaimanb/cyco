import MovieCard from '../../../components/movieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';

const TopPicks = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      fetch('/MoviesWithDetails.json') 
          .then(res => res.json())
          .then(data => setMovies(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  


  return (
    <div className="w-full flex flex-wrap gap-1">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default TopPicks;
