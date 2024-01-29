import { YouTubePlaylist } from '@codesweetly/react-youtube-playlist';
import React from 'react';
import Container from '../container/Container';

const SeriesParts = () => {
  return (
    <Container>
      <div className="min-h-screen">
      <div className="flex-col lg:flex-row text-zinc-300">
        <YouTubePlaylist
          className="mx-auto z-10"
          apiKey="AIzaSyAG0Lqn0DeDWDg3xG1oGdwKnf0hCQ6OBi8"
          playlistId="PL1pf33qWCkmjWcACm71NzSkb72r6YtDon"
          uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
        />
      </div>
    </div>
    </Container>
  );
};

export default SeriesParts;
