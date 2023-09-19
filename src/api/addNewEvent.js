export const addNewEvent =async (eventData) =>{
    const response = await fetch(`http://localhost:8080/newEvent`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(eventData),
    })
    const data = await response.json()
    return data;
}