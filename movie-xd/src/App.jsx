import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=2c8d560c';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    if (!query) return;
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${abc123}&s=${Inception}`);
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
     <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow">
  <div className="text-xl font-bold">🎥 MovieApp</div>
  <ul className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
    <li><a href="#" className="hover:text-blue-500">Home</a></li>
    <li><a href="#" className="hover:text-blue-500">About</a></li>
  </ul>
</nav> 
<img
  src={movie.Poster}
  alt={movie.Title}
  className="w-full h-auto object-cover rounded"
/>
    </div>
  );
};

export default App;