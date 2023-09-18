export const addLiveTV = async (movieData) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/liveTV`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(movieData),
  });
  const data = await response.json();
  return data;
};
