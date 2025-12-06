// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UrlForm from "./components/UrlForm";
import ShortUrlResult from "./components/ShortUrlResult";
import History from "./components/History";
import Analysis from "./components/Analysis";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("history"); 
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([
    {
      id: 1,
      originalUrl: "https://example.com/very/long/url/1",
      shortUrl: "https://short.ly/abc123",
      createdAt: "2025-12-05 10:00",
      clicks: 10,
    },
    {
      id: 2,
      originalUrl: "https://another-long-url.com/path",
      shortUrl: "https://short.ly/xyz789",
      createdAt: "2025-12-05 11:30",
      clicks: 3,
    },
  ]);

  const handleShorten = (originalUrl) => {
    // Simulate backend-generated short URL
    const randomCode = Math.random().toString(36).substring(2, 8);
    const shortUrl = `https://short.ly/${randomCode}`;

    const newEntry = {
      id: Date.now(),
      originalUrl,
      shortUrl,
      createdAt: new Date().toLocaleString(),
      clicks: 0,
    };

    setCurrentResult(newEntry);
    setHistory((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="main-content">
        <section className="shortener-section">
          <h1 className="title">URL Shortener</h1>
          <UrlForm onShorten={handleShorten} />
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
