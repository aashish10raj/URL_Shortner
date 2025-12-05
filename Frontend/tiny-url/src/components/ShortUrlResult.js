// src/components/ShortUrlResult.js
import React from "react";

const ShortUrlResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result-card">
      <h2>Shortened URL</h2>
      <p className="result-original">
        Original: <span>{result.originalUrl}</span>
      </p>
      <p className="result-short">
        Short:{" "}
        <a href={result.shortUrl} target="_blank" rel="noopener noreferrer">
          {result.shortUrl}
        </a>
      </p>
    </div>
  );
};

export default ShortUrlResult;
