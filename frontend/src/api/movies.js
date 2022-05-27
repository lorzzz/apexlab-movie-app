import client from './common/client';

export const getMovies = async (filter) => await client.get(`/api/movies?filter=${encodeURIComponent(filter)}`);
export const getMovie = async (id) => await client.get(`/api/movies/${id}`);
