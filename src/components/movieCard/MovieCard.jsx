import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const [isMovieOpen, setIsMovieOpen] = useState(false);

  const openMoviePlayer = () => {
    setIsMovieOpen(true);
  };

  const closeMoviePlayer = () => {
    setIsMovieOpen(false);
  };

  return (
    <div
      onClick={openMoviePlayer}
      className="card w-full mt-10 mb-20 h-80 md:w-[250px]"
    >
      <img
        className="w-full h-full object-cover rounded-sm hover:brightness-110"
        src={movie?.image}
        alt=""
      />
      <div className="p-2 text-white">
        <h2 className="text- font-semibold">{movie?.title}</h2>
        <p className="mt-2 text-sm">{movie?.duration}</p>
        <p className="text-sm">Released: {movie?.releaseYear}</p>
      </div>
      {isMovieOpen && (
        <div className="fixed items-center inset-0 z-50 top-0 flex justify-center backdrop-blur-xl">
          <div className="flex justify-center">
            <button
              className="fixed mt-10 border border-white rounded-full p-1"
              onClick={closeMoviePlayer}
            >
              <FaTimes size={20} />
            </button>
            {/* <iframe src={movie?.movieURL} frameborder="0" allowFullScreen title={movie?.title}></iframe> */}
            <iframe
              className="w-[80vw] h-[80vh]"
              src="https://www.youtube.com/embed/atnW4D6pc-w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
