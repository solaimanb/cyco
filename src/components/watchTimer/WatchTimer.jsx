import { useEffect, useState } from "react";

const WatchTimer = ({ movieId, userId, onStart, onStop }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    setStartTime(Date.now());
    onStart(); // Call the provided onStart function when watching starts

    return () => {
      if (startTime && endTime === null) {
        setEndTime(Date.now());
        const durationInSeconds = Math.floor((endTime - startTime) / 1000);
        console.log(durationInSeconds);

        // Send the duration to the server to save in the database
        fetch(`${import.meta.env.VITE_SERVER_URL}/save-watch-time`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            movieId,
            duration: durationInSeconds,
          }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Watch time saved successfully");
            } else {
              console.error("Failed to save watch time");
            }
          })
          .catch((error) => {
            console.error("Error saving watch time:", error);
          });

        onStop(); // Call the provided onStop function when watching stops
      }
    };
  }, [movieId, userId, startTime, endTime, onStart, onStop]);

  return null;
};

export default WatchTimer;
