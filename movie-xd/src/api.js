const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'No movies found');
    }
    
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch movies');
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie details not found');
    }
    
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch movie details');
  }
};