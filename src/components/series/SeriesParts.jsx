import YouTubePlaylist from '@codesweetly/react-youtube-playlist';
import React from 'react';

const SeriesParts = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <YouTubePlaylist
            className="mx-auto z-10"
            apiKey="AIzaSyAG0Lqn0DeDWDg3xG1oGdwKnf0hCQ6OBi8"
            playlistId="PL1pf33qWCkmjWcACm71NzSkb72r6YtDon"
            uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
          />
        </div>
      </div>
    </div>
  );
};

export default SeriesParts;
