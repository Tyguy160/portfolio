import React from "react";
import "../styles/portfolioPiece.css";

const PortfolioPiece = props => {
  return (
    <div className="portfolio-piece">
      <div className="thumbnail-container">
        <a href={props.url} alt={props.title}>
          <div className="thumbnail">
            <img
              src={props.imgSrc}
              title={props.title}
              alt={props.title}
              frameBorder="0"
            />
          </div>
        </a>
      </div>
      <a
        href={props.url}
        alt={props.title}
        className="portfolio-link"
        style={{}}>
        <h3 className="site-title">{props.title}</h3>
      </a>
      <div className="site-description">{props.description}</div>
    </div>
  );
};

export default PortfolioPiece;
