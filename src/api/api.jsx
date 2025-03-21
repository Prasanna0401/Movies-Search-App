import axios from 'axios';

const API_KEY = '3bb18026';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}&s=${query}&page=${page}`);
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}&i=${id}`);
  return response.data;
};

export const filterMovies = async (query, type) => {
  const response = await axios.get(`${BASE_URL}&s=${query}&type=${type}`);
  return response.data;
};

export const getRandomMovies = async () => {
  const randomQuery = ["Star Trek", "Friday the 13th", "Star Wars", "Harry Potter", "Batman"];
  const randomIndex = Math.floor(Math.random() * randomQuery.length);
  const response = await axios.get(`${BASE_URL}&s=${randomQuery[randomIndex]}`);
  return response.data;
};