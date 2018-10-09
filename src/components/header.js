import React from "react";
import "../styles/header.css";
import Navigation from "./navigation";

const Header = ({ siteTitle }) => (
  <div className="head">
    <div className="contents">
      <h1 className="home">
        <a href="/" className="home-link">
          Tyler Stephen Maschino
        </a>
      </h1>
      <h1 className="nav">
        <Navigation type="nav-bar" />
      </h1>
    </div>
  </div>
);

export default Header;
