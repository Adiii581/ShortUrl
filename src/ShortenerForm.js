import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function ShortenerForm() {
  // State for the input field
  const [url, setUrl] = useState('');
  
  // State to store the successful shortened URL
  const [shortUrl, setShortUrl] = useState(null);
  
  // State to store any potential errors from the API call
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  /**
   * This function now handles the API call to the backend.
   * It's an 'async' function because we need to 'await' the API response.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Clear previous results and errors
    setShortUrl(null);
    setError(null);

    try {
      // Make the POST request to the Flask backend API endpoint
      const response = await axios.post('http://localhost:5000/api/shorten', {
        url: url // The request body
      });
      
      // If successful, update the state with the response data
      setShortUrl(response.data.short_url);

    } catch (err) {
      // If there's an error, update the error state
      setError('Could not shorten the URL. Please try again.');
      console.error('API Error:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <h2>URL Shortener</h2>
        <div>
          <input
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Enter a long URL"
            style={{ width: '300px', padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '8px 15px', borderRadius: '4px', border: 'none', background: '#007bff', color: 'white' }}>
            Shorten
          </button>
        </div>
      </form>

      {/* --- Display Results --- */}
      {/* Conditionally render the result or the error message */}
      {shortUrl && (
        <div>
          <h3>Shortened URL:</h3>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}

      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default ShortenerForm;
