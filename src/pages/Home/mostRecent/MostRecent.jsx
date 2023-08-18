import Loading from '../../../components/loading/Loading';
import MovieCard from '../../../components/movieCard/MovieCard';
import useMovies from '../../../hooks/useMovies';

const MostRecent = () => {
  // const [movies, setMovies] = useState([]);
  const [movies, loading]= useMovies();
  console.log(movies);

  // useEffect(() => {
  //     fetch('/MoviesWithDetails.json') 
  //         .then(res => res.json())
  //         .then(data => setMovies(data))
  //         .catch(error => console.error('Error fetching data:', error));
  // }, []);
  
if (loading) {
  // You can display a loading indicator here
  return <Loading/>;
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
