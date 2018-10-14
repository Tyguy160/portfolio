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

  let smoothistaDescription =
    "A web app that helps you find smoothie recipes based on the ingredients you have on hand.";
  let brewTimeDescription =
    "A web app that provides step-by-step instructions for brewing AeroPress coffee perfectly.";
  let shiftListDescription =
    "A to-do list web app that allows you to shift incomplete tasks off to the next day.";

  return (
    <div className="portfolio-page">
      <Header />
      <h2>My Endeavors</h2>
      <div className="portfolio">
        <PortfolioPiece
          title={"Smoothista"}
          imgSrc={smoothistaImage}
          url={smoothistaURL}
          description={smoothistaDescription}
        />
        <PortfolioPiece
          title={"Shift List"}
          imgSrc={shiftListImage}
          url={shiftListURL}
          description={shiftListDescription}
        />
        <PortfolioPiece
          title={"Brew Time"}
          imgSrc={brewTimeImage}
          url={brewTimeURL}
          description={brewTimeDescription}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
