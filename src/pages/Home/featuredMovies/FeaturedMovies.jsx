import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './featureCard/FeatureCard';

const FeaturedMovies = () => {
  const navigate = useNavigate()
  const [FeatureMovies, setFeatureMovies] = useState([]);

  // // handle Navigate Button
  // const handleOnclick =(movie)=>{
  //   navigate('/movieDetails', { state: { movie } })

  // }

  useEffect(() => {
    fetch('MoviesWithDetails.json')
      .then(res => res.json())
      .then(data => setFeatureMovies(data))

  },[]);
 

  return (
    <div className="py-5 z-10">
      <div className="flex flex-row md:flex-row gap-3 md:gap-4">
        {
          FeatureMovies.map((movie,index)=> <FeatureCard  key={index} movie={movie} index={index}></FeatureCard>)
        }
      </div>
    </div>
  );
};

export default FeaturedMovies;
