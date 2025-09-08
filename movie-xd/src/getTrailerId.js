// src/getTrailerId.js

/**
 * Fetches the YouTube trailer video ID for a given movie title and year.
 * @param {string} title - Movie title
 * @param {string} year - Movie year
 * @param {string} apiKey - YouTube Data API v3 key
 * @returns {Promise<string|null>} - Trailer video ID or null if not found
 */
export async function getTrailerId(title, year, apiKey) {
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
