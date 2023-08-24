import Loading from '../../../components/loading/Loading';
import MovieCard from '../../../components/movieCard/MovieCard';
import useMovies from '../../../hooks/useMovies';

const TopPicks = () => {
  const [movies, loading] = useMovies();
  // console.log(movies);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {movies?.slice(0, 10).map((movie, index) => (
        <MovieCard key={index} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default TopPicks;
