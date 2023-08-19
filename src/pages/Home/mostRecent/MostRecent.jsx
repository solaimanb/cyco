import Loading from '../../../components/loading/Loading';
import MovieCard from '../../../components/movieCard/MovieCard';
import useMovies from '../../../hooks/useMovies';

const MostRecent = () => {
  const [movies, loading] = useMovies();
  // console.log(movies);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex flex-wrap gap-1">
      {movies?.slice(0, 10).map((movie, index) => (
        <MovieCard key={index} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default MostRecent;
