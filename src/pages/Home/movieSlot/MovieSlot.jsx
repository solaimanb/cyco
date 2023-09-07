import { useSelector } from 'react-redux';
import MovieCard from '../../../components/movieCard/MovieCard';
import useMovies from '../../../hooks/useMovies';

const MovieSlot = () => {
  const [movies] = useMovies();

  const selectedCategory = useSelector((state) => state?.category);
  console.log(selectedCategory);

  const selectedGenres = Array.isArray(selectedCategory)
    ? selectedCategory
    : selectedCategory.split(',').map((genre) => genre.trim());

  const filteredMovies = movies.filter((movie) => {
    //check the input during add new movies: (warning!)
    const movieGenres = movie?.Genre.split(',').map((genre) => genre.trim());

    return selectedGenres.some((genre) => movieGenres.includes(genre));
  });

  return (
    <div className="w-full gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {filteredMovies?.map((movie, index) => (
        <MovieCard key={index} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default MovieSlot;
