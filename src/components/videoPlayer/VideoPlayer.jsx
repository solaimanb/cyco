import ReactPlayer from "react-player";

const VideoPlayer = ( { channel} ) => {

  return (
    <div className="h-full rounded-sm relative">
      {channel ? (
        <div className="relative" style={{ paddingBottom: '66.25%' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${channel?.videoId}`}
            width="100%"
            height="100%"
            controls
            playing // Auto-play the video
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      ) : (
        <p>Select a channel to start playing.</p>
      )}
      {channel && (
        <div className="absolute top-2 right-2 bg-red-600 text-white py-1 px-2 rounded-sm text-sm">
          Live
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
