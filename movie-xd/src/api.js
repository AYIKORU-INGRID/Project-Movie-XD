const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

if (!API_KEY) {
  console.warn('OMDB API key is missing. Please set VITE_OMDB_API_KEY in your .env file.');
}

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&page=${page}&apikey=${API_KEY}`);
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
    const response = await fetch(`${BASE_URL}?i=${encodeURIComponent(id)}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie details not found');
    }
    
    return data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch movie details');
  }
};