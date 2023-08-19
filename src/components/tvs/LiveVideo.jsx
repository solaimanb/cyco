import React from 'react';
import ReactPlayer from 'react-player';
import { useLoaderData } from 'react-router-dom';
import CommentPage from './CommentPage';
import Tvs from './Tvs';

const LiveVideo = () => {
  const tvData = useLoaderData();

  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            {/* <iframe
              className="mx-auto w-96 lg:w-full"
              width="660"
              height="515"
              src={tvData[0]?.tvUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}

            <ReactPlayer
              url={movie?.Trailer?.Source}
              width={'70%'}
              height={'70%'}
              controls
            />
            <div className="w-1/3 mx-auto">
              <CommentPage />
            </div>
          </div>
        </div>

        <Tvs />
      </div>
    </>
  );
};

export default LiveVideo;
