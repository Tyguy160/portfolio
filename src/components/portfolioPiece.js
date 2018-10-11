import React from "react";
import "../styles/portfolioPiece.css";

const PortfolioPiece = props => {
  return (
    <div>
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
      <a href={props.url} alt={props.title} class="portfolio-link" style={{}}>
        <h3 className="description">{props.title}</h3>
      </a>
    </div>
  );
};

export default PortfolioPiece;
