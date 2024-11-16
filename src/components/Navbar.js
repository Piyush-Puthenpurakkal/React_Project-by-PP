import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = ({ onSearch, toggleDarkMode, isDarkMode, setCategory }) => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="navbar">
      <div className="navbar-title">News Boom</div>
      <div className="navbar-categories">
        <ul>
          <li
            className={`categories-item ${activeCategory === "business" ? "active" : ""}`}
            onClick={() => handleCategoryClick("business")}
          >
            Business
          </li>
          <li
            className={`categories-item ${activeCategory === "entertainment" ? "active" : ""}`}
            onClick={() => handleCategoryClick("entertainment")}
          >
            Entertainment
          </li>
          <li
            className={`categories-item ${activeCategory === "general" ? "active" : ""}`}
            onClick={() => handleCategoryClick("general")}
          >
            General
          </li>
          <li
            className={`categories-item ${activeCategory === "health" ? "active" : ""}`}
            onClick={() => handleCategoryClick("health")}
          >
            Health
          </li>
          <li
            className={`categories-item ${activeCategory === "science" ? "active" : ""}`}
            onClick={() => handleCategoryClick("science")}
          >
            Science
          </li>
          <li
            className={`categories-item ${activeCategory === "sports" ? "active" : ""}`}
            onClick={() => handleCategoryClick("sports")}
          >
            Sports
          </li>
          <li
            className={`categories-item ${activeCategory === "technology" ? "active" : ""}`}
            onClick={() => handleCategoryClick("technology")}
          >
            Technology
          </li>
        </ul>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>
      {/* Dark mode toggle is in the sidebar */}
    </div>
  );
};

export default Navbar;
