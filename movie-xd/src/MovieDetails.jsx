import React, { useEffect, useState } from 'react';
import { getTrailerId } from './getTrailerId';

const MovieDetails = ({ movie, onClose }) => {
  const [trailerId, setTrailerId] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    async function fetchTrailer() {
      if (movie?.Title && movie?.Year) {
        const id = await getTrailerId(movie.Title, movie.Year);
        setTrailerId(id);
      }
    }
    fetchTrailer();
    setShowTrailer(false); // Reset trailer view when movie changes
  }, [movie]);

  if (!movie) return null;

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Ratings,
    imdbRating,
    imdbVotes,
    Type,
    BoxOffice,
    Production
  } = movie;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold">{Title} ({Year})</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              {Poster !== 'N/A' ? (
                <img 
                  src={Poster} 
                  alt={Title} 
                  className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                  onClick={() => setShowTrailer(trailerId ? !showTrailer : false)}
                  title={trailerId ? 'Tap to view trailer' : 'No trailer available'}
                />
              ) : (
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>
            <div className="md:w-2/3">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Plot</h3>
                <p className="text-gray-700">{Plot}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-medium text-gray-900">Director</h4>
                  <p className="text-gray-700">{Director}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Actors</h4>
                  <p className="text-gray-700">{Actors}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Genre</h4>
                  <p className="text-gray-700">{Genre}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Released</h4>
                  <p className="text-gray-700">{Released}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Runtime</h4>
                  <p className="text-gray-700">{Runtime}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Rated</h4>
                  <p className="text-gray-700">{Rated}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Ratings</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-yellow-100 px-3 py-1 rounded-md">
                    <span className="font-medium">IMDb:</span> {imdbRating}/10 ({imdbVotes} votes)
                  </div>
                  {Ratings && Ratings.map((rating, index) => (
                    <div key={index} className="bg-blue-100 px-3 py-1 rounded-md">
                      <span className="font-medium">{rating.Source}:</span> {rating.Value}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900">Awards</h4>
                  <p className="text-gray-700">{Awards}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Box Office</h4>
                  <p className="text-gray-700">{BoxOffice}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Production</h4>
                  <p className="text-gray-700">{Production}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Country</h4>
                  <p className="text-gray-700">{Country}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Trailer Section */}
          {showTrailer && trailerId && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Trailer</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${trailerId}`}
                  title="YouTube trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
