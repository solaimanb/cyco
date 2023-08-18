//get all data
export const getData = async () => {
    const response = await fetch(`http://localhost:5000/exgemple`);
    const result = await response.json();
    return result;

}