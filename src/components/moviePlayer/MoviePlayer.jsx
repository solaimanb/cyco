// import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

const MoviePlayer = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  // const [watchStartTime, setWatchStartTime] = useState(null);
  // const [watchEndTime, setWatchEndTime] = useState(null);

  // const handleWatchStart = () => {
  //   setWatchStartTime(Date.now());
  // };

  // const handleWatchEnd = () => {
  //   setWatchEndTime(Date.now());

  //   if (watchStartTime) {
  //     const durationInSeconds = Math.floor(
  //       (watchEndTime - watchStartTime) / 1000
  //     );
  //     saveWatchTime(durationInSeconds);
  //   }
  // };

  // useEffect(() => {
  //   const videoPlayer = document.getElementById("video-player");

  //   videoPlayer.addEventListener("play", handleWatchStart);
  //   videoPlayer.addEventListener("pause", handleWatchEnd);

  //   return () => {
  //     videoPlayer.removeEventListener("play", handleWatchStart);
  //     videoPlayer.removeEventListener("pause", handleWatchEnd);
  //     handleWatchEnd(); // End the watch when the component unmounts
  //   };
  // }, []);

  // const saveWatchTime = async (duration) => {
  //   console.log(duration);
  //   try {
  //     const response = await fetch("/save-watch-time", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: "64f89f19746d2fab49ffb3f9", // Replace with the actual user ID
  //         movieId: movie?._id, // Make sure you have the correct movie ID
  //         duration,
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log("Watch time saved successfully");
  //     } else {
  //       console.error("Failed to save watch time");
  //     }
  //   } catch (error) {
  //     console.error("Error saving watch time:", error);
  //   }
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <ReactPlayer
          url={movie?.Trailer}
          controls
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default MoviePlayer;
