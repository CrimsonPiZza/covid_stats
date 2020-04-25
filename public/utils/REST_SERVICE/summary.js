async function getSummary() {
    return await axios.get('https://api.covid19api.com/summary')
    .then((response) => {
       return response.data
    });
}