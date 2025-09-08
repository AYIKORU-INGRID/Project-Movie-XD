import { useState, useEffect } from 'react';
import { searchMovies, getMovieDetails } from './api';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (query, page = 1) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    setSelectedMovie(null);
    
    try {
      const data = await searchMovies(query, page);
      setMovies(data.Search || []);
      setTotalResults(parseInt(data.totalResults) || 0);
      setCurrentPage(page);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const movie = await getMovieDetails(id);
      setSelectedMovie(movie);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearSelection = () => {
    setSelectedMovie(null);
  };

  return {
    movies,
    selectedMovie,
    loading,
    error,
    totalResults,
    currentPage,
    handleSearch,
    handleMovieSelect,
    clearSelection,
    setCurrentPage
  };
};