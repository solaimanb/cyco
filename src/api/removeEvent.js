export const removEvent =async (id)=>{
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/events/${id}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const data = await response.json()
    return data;
}