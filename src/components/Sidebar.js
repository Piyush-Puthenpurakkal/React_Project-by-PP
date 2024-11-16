import React from "react";
import "./styles/Sidebar.css";

const Sidebar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="sidebar">
      <div className="dark-mode-toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
};

export default Sidebar;
