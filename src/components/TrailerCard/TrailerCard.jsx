import { Link } from 'react-router-dom';
const TrailerCard = ({ movie, index }) => {
  return (
    <div className="card w-full mt-10 mb-20 h-[200px] md:h-[250px] lg:h-[350px]">
      <Link to={`/trailer/${index}`}>
        <img
          className="w-full h-full object-cover rounded-sm hover:brightness-110"
          src={movie?.Thumbnail}
          alt=""
        />
        <div className="p-2 text-white">
          <h2 className="text- font-semibold">{movie?.Title}</h2>
          <p className="text-sm">Will Be Release: {movie?.Year}</p>
        </div>
      </Link>
    </div>
  );
};
export default TrailerCard;
