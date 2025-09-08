import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  const { Title, Year, Poster, imdbID } = movie;
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(imdbID)}
    >
      <div className="aspect-w-2 aspect-h-3">
        <img
          src={Poster !== 'N/A' ? Poster : '/placeholder.png'}
          alt={Title}
          className="w-full h-64 object-cover"
          onError={e => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{Title}</h3>
        <p className="text-gray-600">{Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;