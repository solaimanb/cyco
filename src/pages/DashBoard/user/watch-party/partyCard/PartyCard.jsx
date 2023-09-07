import React from 'react';
import { Link } from 'react-router-dom';

const PartyCard = ({ event, index }) => {

    return (
        <div
            key={index}
            className="w-ful w-[120px] h-[220px] md:w-[180px] md:h-[280px]"
        >

            <Link to='watch-party-public' state={{item:event}}>
                <img

                    src={event?.banner}
                    alt={`Kid ${index + 1}`}
                    className="w-full h-full object-cover rounded-sm hover:brightness-110"
                />
            </Link>
        </div>
    );
};

export default PartyCard;