import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Toufiq</div>
        <input placeholder="Search..." />
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a
          href="https://github.com/iamtoufiq?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/toufiq-choudhari-56208b203/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Navbar;
