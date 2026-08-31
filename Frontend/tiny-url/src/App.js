// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UrlForm from "./components/UrlForm";
import ShortUrlResult from "./components/ShortUrlResult";
import History from "./components/History";
import Analysis from "./components/Analysis";
import { createShortUrl, getRecentUrls, API_BASE_URL } from "./Api";
import "./App.css";

const toHistoryEntry = (mapping) => ({
  id: mapping.id,
  originalUrl: mapping.longUrl,
  shortUrl: `${API_BASE_URL}/${mapping.shortHash}`,
  createdAt: mapping.createdAt
    ? new Date(mapping.createdAt).toLocaleString()
    : new Date().toLocaleString(),
  clicks: mapping.clickCount ?? 0,
});

const App = () => {
  const [activeTab, setActiveTab] = useState("history");
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecentUrls()
      .then((mappings) => setHistory(mappings.map(toHistoryEntry)))
      .catch((err) => setError(err.message || "Failed to load recent URLs."));
  }, []);

  const handleShorten = async (originalUrl) => {
    setError(null);
    setLoading(true);
    try {
      const mapping = await createShortUrl(originalUrl);
      const newEntry = toHistoryEntry(mapping);

      setCurrentResult(newEntry);
      setHistory((prev) => [newEntry, ...prev].slice(0, 5));
    } catch (err) {
      setError(err.message || "Something went wrong while shortening the URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main-content">
        <section className="shortener-section">
          <h1 className="title">URL Shortener</h1>
          <UrlForm onShorten={handleShorten} disabled={loading} />
          {error && <p className="error-text">{error}</p>}
          <ShortUrlResult result={currentResult} />
        </section>

        <section className="tab-content">
          {activeTab === "history" && <History items={history} />}
          {activeTab === "analysis" && <Analysis items={history} />}
        </section>
      </main>
    </div>
  );
};

export default App;