import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const EventCard = ({event}) => {
    return (
        <div
            className="card w-full border border-zinc-600 rounded-lg m-2 p-2 "
        >
            <LazyLoadImage
                className="w-full h-60 md:h-80 2xl:h-96 object-cover rounded-sm hover:brightness-110"
                alt={event.alt}
                effect="blur"
                height={event?.height}
                src={event?.banner}
                threshold={100}
                width={event?.width}
            />
            <div className="p-2 text-white">
                <h2 className="text-sm lg:text-md  lg:font-semibold">{event?.title}</h2>
                <p className="text-xs font-thin lg:font-normal">Released: {event?.relase}</p>
            </div>
        </div>
    );
};

export default EventCard;