import "./links.css";
import React from "react";

const Links = () => {
  return (
    <div className="links">
      <div className="linksContainer">
        <div className="link frame">
          <div className="text">
            <a href="https://twitter.com/NueltCodes/">Twitter Link</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://training.zuri.team/">Zuri Team</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://books.zuri.team/">Zuri Books</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="twitter">Python Books</a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://background.zuri.team/">
              Background Check for Coders
            </a>
          </div>
        </div>
        <div className="link frame">
          <div className="text">
            <a href="https://books.zuri.team/design-rules">Design Books</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
