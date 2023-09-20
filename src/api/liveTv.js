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

// export const updateLiveTV = async (channelId, updatedData) => {
//   const response = await fetch(
//     `${import.meta.env.VITE_SERVER_URL}/liveTV/${channelId}`,
//     {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     }
//   );
//   const data = await response.json();
//   return data;
// };

export const updateLiveTV = async (channelId, updatedData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/liveTV/${channelId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      // Handle non-successful response status codes (e.g., 404, 500)
      throw new Error("Update failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors or JSON parsing errors
    console.error(error);
    throw error; // Rethrow the error for the caller to handle
  }
};
