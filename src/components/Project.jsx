import React from "react";
import Link from "../components/Link";
import BitcoinPriceHistoryScreenshot from "../assets/images/bitcoin-price-history-screenshot.png";
import SpaceLaunchScreenshot from "../assets/images/space-launch-screenshot.png";

export default function Project() {
  const bitcoinPriceHistory = {
    url: "https://chanhlonglu.github.io/react-bpi",
    imgSrc: BitcoinPriceHistoryScreenshot,
    imgAlt: "Bitcoin Price History"
  };

  const spaceLaunch = {
    url: "https://chanhlonglu.github.io/react-space-launch",
    imgSrc: SpaceLaunchScreenshot,
    imgAlt: "Space Launch"
  };

  return (
    <div className="container-fluid">
      <div className="row blank-row">
        <h1>Personal Projects</h1>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <Link content={bitcoinPriceHistory} />
        </div>
        <div className="col-6">
          <Link content={spaceLaunch} />
        </div>
      </div>
    </div>
  );
}
