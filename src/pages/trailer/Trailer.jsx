import React from 'react';
import { FaSearch } from 'react-icons/fa';
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
    <div className="mt-10">
      <div className="flex items-center gap-3 justify-center">
        <input
          type="search"
          className="rounded-full px-3 py-2 w-[30%]"
          placeholder="Search Trailers"
        />
        <FaSearch size={22} />
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {movies.map((movie, index) => (
          <TrailerCard key={index} movie={movie}></TrailerCard>
        ))}
      </div>
    </div>
  );
};

export default Trailer;
