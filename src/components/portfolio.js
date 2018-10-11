import React from "react";

import Header from "./header";
import PortfolioPiece from "./portfolioPiece";

import "../styles/portfolio.css";

// Thumbnail images
import smoothistaImage from "../images/smoothista.png";
import brewTimeImage from "../images/brew-time.png";
import shiftListImage from "../images/shift-list.png";

const PortfolioPage = () => {
  // Portfolio URLs
  let smoothistaURL = "https://smoothista.com";
  let brewTimeURL = "https://triplebarcoffee.com/brew-time";
  let shiftListURL = "https://shiftlist.netlify.com";

  return (
    <div className="portfolio-page">
      <Header />
      <h2>My Endeavors</h2>
      <div className="portfolio">
        <PortfolioPiece
          className="portfolio-piece"
          title={"Smoothista"}
          imgSrc={smoothistaImage}
          url={smoothistaURL}
        />
        <PortfolioPiece
          className="portfolio-piece"
          title={"Shift List"}
          imgSrc={shiftListImage}
          url={shiftListURL}
        />
        <PortfolioPiece
          className="portfolio-piece"
          title={"Brew Time"}
          imgSrc={brewTimeImage}
          url={brewTimeURL}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
