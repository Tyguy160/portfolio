import React from "react";
import "../styles/navigation.css";

const Navigation = props => (
  <div className={props.type}>
    <Link to="/about" className="navButton">
      {"About".toUpperCase()}
    </Link>
    <Link to="/contact" className="navButton">
      {"Contact".toUpperCase()}
    </Link>
    <Link to="/portfolio" className="navButton">
      {"Portfolio".toUpperCase()}
    </Link>
    <Link to="/blog" className="navButton">
      {"Blog".toUpperCase()}
    </Link>
  </div>
);

export default Navigation;
