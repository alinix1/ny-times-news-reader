const key = process.env.REACT_APP_API_KEY 

const fetchArticlesData = (data) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${data}.json?api-key=${key}`)
    .then(response => {
        if(!response.ok) {
            throw new Error ('Error')
        } else {
            return response.json()
        }
    })
    .catch(error => console.log(error))
}

export { fetchArticlesData }

