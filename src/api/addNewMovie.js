export const addNewMovie = async movieData =>{
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/movies`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(movieData),
    })
    const data = await response.json()
    return data;
}
