import { Link } from 'react-router-dom';

const TrailerCard = ({ movie, index }) => {
  return (
    <div className="card w-full pb-8 group">
      <Link to={`/trailer/${index}`}>
        <img
          className="w-96 h-72 mx-auto rounded-sm hover:brightness-110 group-hover:scale-105 object-cover"
          src={movie?.Thumbnail}
          alt=""
        />
      <div className="pt-4 text-white text-center">
        <h2 className="text- font-semibold">{movie?.Title}</h2>
        <p className="text-sm">Will Be Release: {movie?.Year}</p>
      </div>
      </Link>
    </div>
  );
};
export default TrailerCard;
