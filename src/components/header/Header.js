import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="profileSection">
        <div className="profile-pics"></div>
        <div className="linkText">
          <a
            href="https://twitter.com/NueltCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text"
          >
            Olaniran Emmanuel
          </a>
          {/* https://slackcommunity.com/u/mpf2ch/#/about */}
        </div>
      </div>
      <div className="ShareContainer">
        <div className="shareIcon"></div>
      </div>
    </div>
  );
};

export default Header;
