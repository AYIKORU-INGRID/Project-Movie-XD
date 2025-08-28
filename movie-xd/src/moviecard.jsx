// MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded shadow p-2 hover:shadow-lg transition">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} className="w-full h-64 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
      <p className="text-gray-600">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;