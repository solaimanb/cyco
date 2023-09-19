export const addNewEvent =async (eventData) =>{
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/newEvent`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(eventData),
    })
    const data = await response.json()
    return data;
}