// update a room
export const updateSubscription = async (roomData, id) => {
    console.log(id);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(roomData),
    })
  
    const data = await response.json()
    return data
  }