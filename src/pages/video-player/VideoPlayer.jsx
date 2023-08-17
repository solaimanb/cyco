import React from 'react';

const VideoPlayer = () => {
    // Task: if we add all movie Link with Json file then we can show dynamic
    // That's static video player
    return (
        <div className="bg-gray-800 rounded-lg p-2">
            <iframe
                src="https://www.youtube.com/embed/atnW4D6pc-w"
                title="Live Video"
                allowFullScreen
                className="w-full h-[500px] "
            ></iframe>
        </div>
    );
};

export default VideoPlayer;