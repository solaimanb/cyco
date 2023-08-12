const MovoCard = ({movie}) => {
    console.log(movie?.title);
  return (
    <div className="w-full mt-10 mb-20 h-80 md:w-[250px] lg:w-[280px] lg:h-[380px]">
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
    </div>
  );
};

export default MovoCard;
