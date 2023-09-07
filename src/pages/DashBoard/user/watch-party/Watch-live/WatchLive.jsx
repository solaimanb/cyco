import React from 'react';
import { useLocation } from 'react-router-dom';

const WatchLive = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default WatchLive;