import React from 'react';
import Loading from '../../components/loading/Loading';
import TrailerCard from '../../components/trailerCard/TrailerCard';
import useMovies from '../../hooks/useMovies';

const Trailer = () => {
  const [movies, loading] = useMovies();
  // console.log(movies);

  if (loading) {
    return <Loading />;
  }

  if (!Array.isArray(movies)) {
    return <div>Error: Movies data is not an array.</div>;
  }

  return (
    <div className="w-full flex flex-wrap gap-1">
      {movies.map((movie, index) => (
        <TrailerCard key={index} movie={movie}></TrailerCard>
      ))}
    </div>
  );
};

export default Trailer;
