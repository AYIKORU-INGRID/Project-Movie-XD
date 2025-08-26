// App.jsx
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

const API_KEY = 'your_omdb_api_key';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    if (!query) return;
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchMovies} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;