import React from 'react';
import ReactPlayer from 'react-player';
import { useLoaderData } from 'react-router-dom';
import CommentPage from './CommentPage';

const LiveVideo = () => {
  const tvData = useLoaderData();

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <ReactPlayer
            url={movie?.Trailer?.Source}
            width={'100%'}
            height={'100%'}
            controls
          />
          <div className="w-1/3 mx-auto">
            <CommentPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideo;
