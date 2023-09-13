// update a room
export const updateSubscription = async (roomData, id) => {
    console.log(id);
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/updateManageSubscriptions/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(roomData),
    })
  
    const data = await response.json()
    return data
  }