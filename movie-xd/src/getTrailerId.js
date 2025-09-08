// src/getTrailerId.js

/**
 * Fetches the YouTube trailer video ID for a given movie title and year.
 * @param {string} title - Movie title
 * @param {string} year - Movie year
 * @returns {Promise<string|null>} - Trailer video ID or null if not found
 */
export async function getTrailerId(title, year) {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  if (!apiKey) {
    console.error('YouTube API key is missing. Please set VITE_YOUTUBE_API_KEY in your .env file and restart the dev server.');
    return null;
  }
  const query = encodeURIComponent(`${title} ${year} official trailer`);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${query}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0].id.videoId;
    }
    return null;
  } catch (error) {
    console.error('Error fetching trailer ID:', error);
    return null;
  }
}
