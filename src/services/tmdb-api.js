import axios from "axios";

const API_KEY = "bc0269b6d9cf7518455c0d29c76f0527";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
//axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  api_key: API_KEY,
  include_adult: "false",
  language: "en-US",
};

export const fetchMovies = async (page, signal) => {
  const response = await axios.get(`/trending/movie/day?page=${page}`, {
    signal,
  });
  //console.log("Response", response.data);
  return response.data.results;

  //const allResults = response.data.results;
  //const limitedResults = allResults.slice(0, 3); // тільки 3 фільми
  //return limitedResults;
};

export const fetchMoviesById = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}`, {
    signal,
  });
  //console.log("Response", response.data);
  return response.data;
};

export const fetchCastByMovieId = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}/credits`, { signal });
  return response.data;
};

export const fetchReviewsByMovieId = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, { signal });
  return response.data;
};

export const fetchSearchMovies = async (query) => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
};
