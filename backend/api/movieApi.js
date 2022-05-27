
const http = require('axios');
const { getPopularMoviesQuery, getSearchMoviesQuery, getMovieQuery } = require('../helpers/queryHelper');
const { getMovieExternalIdsUrl } = require('../helpers/urlHelper');

const getPopularMovies = async () => {
    try {
        const response = await http.post(process.env.TMDB_GRAPH_API_URL, getPopularMoviesQuery());
        return response;
    } catch(error) {
        throw error;
    }
}

const getMovies = async (filter) => {
    try {
        const response = await http.post(process.env.TMDB_GRAPH_API_URL, getSearchMoviesQuery(filter));
        return response;
    } catch(error) {
        throw error;
    }
}

const getMovie = async (id) => {
    try {
        const response = await http.post(process.env.TMDB_GRAPH_API_URL, getMovieQuery(id));
        return response;
    } catch(error) {
        throw error;
    }
}

const getMovieExternalIds = async (id) => {
    try {
        const response = await http.get(getMovieExternalIdsUrl(id));
        return response;
    } catch(error) {
        throw error;
    }    
}

module.exports = {
    getMovies,
    getPopularMovies,
    getMovie,
    getMovieExternalIds
}