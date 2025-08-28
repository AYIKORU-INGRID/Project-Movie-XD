// SearchBar.jsx
import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="px-4 py-2 border rounded-l-md w-64"
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
