import React from "react";
import "./style.css";
const TopAppBarNavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-row">
        <div className="navigation-group">
          <div className="options">
            <p className="option-text">Home</p>
          </div>
          <div className="options">
            <p className="option-text">Spending</p>
          </div>
          <div className="options">
            <p className="option-text">Graph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAppBarNavigationBar;
