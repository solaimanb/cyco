export const addNewMovie = async movieData =>{
    const response = await fetch(`http://localhost:8080/movies`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(movieData),
    })
    const data = await response.json()
    return data;
}
