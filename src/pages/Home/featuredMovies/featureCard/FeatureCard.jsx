import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({movie,index}) => {
    const navigate = useNavigate();
    const handleOnclick =()=>{
        navigate('/movieInfo', { state: { movie } })
    }

    return (
        <div key={index} className="w-full md:w-[180px] h-[280px]">
            <img
                onClick={handleOnclick}
                src={movie?.Poster}
                alt={`Kid ${index + 1}`}
                className="w-full h-full object-cover rounded-sm hover:brightness-110"
            />
        </div>
    );
};

export default FeatureCard;