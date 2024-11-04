const API_KEY = '3bb18026';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm, type) => {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&type=${type}&apikey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    return await response.json();
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }
    return await response.json();
};