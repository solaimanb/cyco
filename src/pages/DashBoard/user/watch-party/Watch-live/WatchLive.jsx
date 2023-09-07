import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import CommentSection from '../../../../liveTv/CommentSection';

const WatchLive = () => {
    const location = useLocation();
    console.log(location.state?.item);
    const item = location.state?.item;

    return (
        <div>
            <div className="relative" style={{ paddingBottom: '66.25%' }}>
                <ReactPlayer
                    url={item?.source}
                    width="100%"
                    height="100%"
                    controls
                    playing // Auto-play the video
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </div>
            <div>
                <CommentSection />
            </div>
        </div>
    );
};

export default WatchLive;