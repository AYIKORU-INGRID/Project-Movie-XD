import React, { useState } from 'react';
import SearchBar from './searchBar';
import MovieCard from './movieCard';

const API_KEY = '2c8d560c';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    if (!query) return;
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
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
     <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow">
  <div className="text-xl font-bold">🎥 MovieApp</div>
  <ul className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
    <li><a href="#" className="hover:text-blue-500">Home</a></li>
    <li><a href="#" className="hover:text-blue-500">About</a></li>
  </ul>
</nav>
     <SearchBar query={query} setQuery={setQuery} fetchMovies={fetchMovies} />
     {error && <div className="text-red-500 mt-4">{error}</div>}
     <div className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
      </div> 
      </div>
  );
};

export default App;