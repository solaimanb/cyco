export const addHistory = async (Data) => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/history`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
    });
    const result = await response.json();
    return result;
}

  //delete booking by email id 
  export const deleteHistory = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/history/${id}`, {
      method: 'DELETE',
    })
    const result = await response.json()
    return result
      

  }