const BASE_URL = 'https://api.tvmaze.com'

const apiGet = async (queryString) => {
    const response = await fetch(
        `${BASE_URL}${queryString}`
    );

    const body = await response.json();

    return body;
}

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`) //"query" indica o que foi digitado na barra de pesquisa para completar a url

export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`)

export const getShowById = (showId) => apiGet((`/shows/${showId}?embed[]=seasons&embed[]=cast`))