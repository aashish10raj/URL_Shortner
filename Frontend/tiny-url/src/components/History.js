// src/components/History.js
import React from "react";

const History = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="placeholder-text">No history yet. Shorten a URL to get started.</p>;
  }

  return (
    <div className="history-container">
      <h2>History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Created At</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {items.map((entry) => (
            <tr key={entry.id}>
              <td className="truncate">{entry.originalUrl}</td>
              <td>
                <a
                  href={entry.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry.shortUrl}
                </a>
              </td>
              <td>{entry.createdAt}</td>
              <td>{entry.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
