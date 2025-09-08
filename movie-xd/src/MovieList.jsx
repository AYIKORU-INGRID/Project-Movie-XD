import React from 'react';
import MovieCard from './MovieCard.jsx';

const MovieList = ({ movies, onMovieSelect }) => {
  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-700">No movies found</h3>
        <p className="text-gray-500 mt-2">Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          onClick={onMovieSelect} 
        />
      ))}
    </div>
  );
};

export default MovieList;