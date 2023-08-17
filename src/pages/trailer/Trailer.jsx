import React from 'react';
import TrailerCard from '../../components/trailerCard/TrailerCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Trailer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/MoviesWithDetails.json') 
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="w-full flex flex-wrap gap-1">
            {movies.map((movie, index) => (
                <TrailerCard
                key={index} 
                movie={movie}
                ></TrailerCard>
            ))}
        </div>
    );
};

export default Trailer;