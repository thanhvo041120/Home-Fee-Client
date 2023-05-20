import React from "react";
import "./style.css";
const Slide = ({ url, alternativeText }) => {
  return <img src={url} alt={alternativeText} className="carousel-items" />;
};

export default Slide;
