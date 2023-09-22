import React from 'react';
import useMovies from '../../../hooks/useMovies';
import FeatureCard from './featureCard/FeatureCard';

const FeaturedMovies = () => {
  const [ movies ] = useMovies();
  
  const reversedMovies = [...movies].reverse();

  return (
    <div className="flex flex-row md:flex-row gap-3 md:gap-4 py-5 z-10">
      {reversedMovies.map((movie, index) => (
        <FeatureCard key={index} movie={movie} index={index}></FeatureCard>
      ))}
    </div>
  );
};

export default FeaturedMovies;
