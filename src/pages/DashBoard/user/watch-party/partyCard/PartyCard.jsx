import React from 'react';

const PartyCard = ({event,index}) => {
    return (
        <div
            key={index}
            className="w-ful w-[120px] h-[220px] md:w-[180px] md:h-[280px]"
        >
            <img
                
                src={event?.banner}
                alt={`Kid ${index + 1}`}
                className="w-full h-full object-cover rounded-sm hover:brightness-110"
            />
        </div>
    );
};

export default PartyCard;