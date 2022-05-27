const getWikipediaSearchUrl = (searchTerm) => {
    return `${process.env.WIKIPEDIA_BASE_URL}?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=${searchTerm}`
}

const getMovieExternalIdsUrl = (id) => {
    return `${process.env.TMDB_API_URL}/movie/${id}/external_ids?api_key=${process.env.TMDB_API_KEY}`
}

module.exports = {
    getWikipediaSearchUrl,
    getMovieExternalIdsUrl
}
    