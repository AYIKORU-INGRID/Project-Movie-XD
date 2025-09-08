import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  const { Title, Year, Poster, imdbID } = movie;
  
  return (
    <div 
      className="bg-gradient-to-br from-indigo-300 via-pink-200 to-yellow-100 border-2 border-pink-400 rounded-xl shadow-xl overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl p-2"
      onClick={() => onClick(imdbID)}
    >
      <div className="aspect-w-2 aspect-h-3 relative">
        <img
          src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
          alt={movie.Title}
          className="w-full h-auto object-cover rounded shadow-md"
          onError={e => {
            e.target.onerror = null;
            e.target.src = '/placeholder.png';
            e.target.parentNode.querySelector('.no-image-overlay').style.display = 'flex';
          }}
        />
        <div className="no-image-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-base font-bold tracking-wide" style={{display: 'none'}}>
          No Image Available
        </div>
      </div>
      <div className="p-4 bg-white bg-opacity-90 rounded-b-xl">
        <h3 className="font-extrabold text-xl truncate text-pink-700 drop-shadow-sm mb-1">{Title}</h3>
        <p className="text-yellow-700 font-semibold text-md">{Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;