import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const isMovieOpen = false;
  // console.log(movie);

  const openMovie = () => {
    navigate("/movieInfo", { state: { movie } });
  };

  return (
    <div
      onClick={openMovie}
      className="card w-full border border-zinc-600 rounded-sm mb-12"
    >
      <LazyLoadImage
        className="w-full h-60 md:h-80 2xl:h-96 object-cover rounded-sm hover:brightness-110"
        alt={movie.alt}
        effect="blur"
        height={movie?.height}
        src={movie?.Poster}
        threshold={100}
        width={movie?.width}
      />
      <div className="p-2 text-white">
        <h2 className="text-sm lg:text-md  lg:font-semibold">{movie?.Title}</h2>
        <p className="mt-2 text-xs font-thin lg:font-normal">{movie?.Runtime}</p>
        <p className="text-xs font-thin lg:font-normal">Released: {movie?.Released}</p>
      </div>
    </div>
  );
};

export default MovieCard;
