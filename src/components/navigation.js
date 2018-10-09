import React from "react";
import "../styles/navigation.css";

const Navigation = props => (
  <div className={props.type}>
    <a href="/about" className="navButton">
      {"About".toUpperCase()}
    </a>
    <a href="/contact" className="navButton">
      {"Contact".toUpperCase()}
    </a>
    <a href="/portfolio" className="navButton">
      {"Portfolio".toUpperCase()}
    </a>
    <a href="/blog" className="navButton">
      {"Blog".toUpperCase()}
    </a>
  </div>
);

export default Navigation;
