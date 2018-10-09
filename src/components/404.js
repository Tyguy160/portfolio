import React from "react";
import Header from "./header";
import "../styles/404.css";
const NotFoundPage = () => (
  <div>
    <Header />
    <div className="error-container">
      <h2>NOT FOUND</h2>
      <p>You went to a page that doesn&#39;t exist... bummer!</p>
    </div>
  </div>
);

export default NotFoundPage;
