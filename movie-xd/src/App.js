import React, { useState, useEffect } from 'react';
import { useMovies } from './useMovies';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const {
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
  } = useMovies();

  useEffect(() => {
    // Load popular movies on initial render
    handleSearch('marvel');
  }, []);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    handleSearch(query, 1);
  };

  const handlePageChange = (page) => {
    handleSearch(searchQuery, page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Movie Database</h1>
          <p className="mt-1 text-gray-600">Search and explore your favorite movies</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <SearchBar onSearch={handleSearchSubmit} />
        
        {error && <ErrorMessage message={error} />}
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
            
            {movies.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalResults={totalResults}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
        
        {selectedMovie && (
          <MovieDetails movie={selectedMovie} onClose={clearSelection} />
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Movie Database. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;