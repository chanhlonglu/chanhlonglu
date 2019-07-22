import React from "react";
import BitcoinPriceHistoryScreenshot from "../assets/images/bitcoin-price-history-screenshot.png";
import SpaceLaunchScreenshot from "../assets/images/space-launch-screenshot.png";

export default function Project() {
  return (
    <div className="container-fluid">
      <div className="row blank-row">
        <h1>Projects</h1>
      </div>
      <div className="row">
        <div className="horizontal-align-center">
          <p>Personal projects</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <a
            href="https://chanhlonglu.github.io/react-bpi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={BitcoinPriceHistoryScreenshot}
              alt="Bitcoin Price History"
              className="project-img"
            />
          </a>
        </div>
        <div className="col-6">
          <a
            href="https://chanhlonglu.github.io/react-space-launch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={SpaceLaunchScreenshot}
              alt="Space Launch"
              className="project-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
