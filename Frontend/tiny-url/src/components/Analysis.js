// src/components/Analysis.js
import React, { useMemo } from "react";

const Analysis = ({ items }) => {
  const stats = useMemo(() => {
    if (!items || items.length === 0) return { total: 0, totalClicks: 0, avgClicks: 0 };

    const total = items.length;
    const totalClicks = items.reduce((sum, item) => sum + (item.clicks || 0), 0);
    const avgClicks = total === 0 ? 0 : (totalClicks / total).toFixed(2);

    return { total, totalClicks, avgClicks };
  }, [items]);

  return (
    <div className="analysis-container">
      <h2>Analysis</h2>
      <div className="analysis-grid">
        <div className="analysis-card">
          <h3>Total Short URLs</h3>
          <p>{stats.total}</p>
        </div>
        <div className="analysis-card">
          <h3>Total Clicks</h3>
          <p>{stats.totalClicks}</p>
        </div>
        <div className="analysis-card">
          <h3>Average Clicks / URL</h3>
          <p>{stats.avgClicks}</p>
        </div>
      </div>
      <p className="placeholder-text">
        These stats are currently based on dummy data. Once the backend is ready, you can plug in real analytics.
      </p>
    </div>
  );
};

export default Analysis;
