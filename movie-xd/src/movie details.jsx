// src/components/MovieDetails.jsx
const MovieDetails = ({ movie, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 font-semibold hover:underline"
      >
        ← Back to list
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster} alt={movie.Title} className="w-full md:w-1/3 rounded-lg" />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800">{movie.Title}</h2>
          <p className="text-lg text-gray-600 mb-4">{movie.Year}</p>
          <p className="text-gray-700 mb-4">{movie.Plot}</p>
          <div className="space-y-2">
            <p><strong className="font-semibold">Genre:</strong> {movie.Genre}</p>
            <p><strong className="font-semibold">Cast:</strong> {movie.Actors}</p>
            <p><strong className="font-semibold">Ratings:</strong></p>
            <ul className="list-disc list-inside ml-4">
              {movie.Ratings && movie.Ratings.map((rating, index) => (
                <li key={index}>
                  {rating.Source}: {rating.Value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
