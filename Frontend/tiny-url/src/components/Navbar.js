
import React from "react";
import "./../App.css";

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Short.ly</div>
      <div className="navbar-tabs">
        <button
          className={`nav-tab ${activeTab === "history" ? "active" : ""}`}
          onClick={() => onTabChange("history")}
        >
          History
        </button>
        <button
          className={`nav-tab ${activeTab === "analysis" ? "active" : ""}`}
          onClick={() => onTabChange("analysis")}
        >
          Analysis
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
