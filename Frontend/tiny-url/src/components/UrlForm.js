// src/components/UrlForm.js
import React, { useState } from "react";

const UrlForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onShorten(url.trim());
    setUrl("");
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="url-input"
        placeholder="Enter the long URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit" className="submit-button">
        Shorten
      </button>
    </form>
  );
};

export default UrlForm;
