import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const MovieReviews = () => {

    const [movieReviews, setMovieReviews] = useState("");






    useEffect(() => {
        // asyncFynction
        const fetchMovieReviews = async () => {
          try {
            const response = await axios.get("http://localhost:8080/movieReviews");
            console.log(response);
            setMovieReviews(response.data);
          } catch (error) {
            console.log("Data fetching Unsuccessfull", error);
          }
        };
    
        fetchMovieReviews();
      }, []);




  return (
    <div>
      <h3>Movie Reviews Component </h3>
    </div>
  )
}

export default MovieReviews
