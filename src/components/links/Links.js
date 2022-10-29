import "./links.css";
import React from "react";

const Links = () => {
  return (
    <div className="links">
      <div className="linksContainer">
        <div className="link frame">
          <div className="text">
            <a href="https://twitter.com/NueltCodes/"target="_blank"
              rel="noopener noreferrer"
            >Twitter Link</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://training.zuri.team/target="_blank"
              rel="noopener noreferrer"
            >Zuri Team</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://books.zuri.team/target="_blank"
              rel="noopener noreferrer"
            >Zuri Books</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://books.zuri.team/"target="_blank"
              rel="noopener noreferrer"
            >Python Books</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://background.zuri.team/"target="_blank"
              rel="noopener noreferrer"
            >
              Background Check for Coders
            </a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://books.zuri.team/design-rules"target="_blank"
              rel="noopener noreferrer"
            >Design Books</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
