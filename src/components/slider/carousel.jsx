import React, { useState } from "react";
import Slide1 from "../../assets/slideshow/save1.png";
import Slide from "./slide";
import "./style.css";

const slides = [
  {
    id: 1,
    name: "slide1",
    source: Slide1,
  },
  {
    id: 2,
    name: "slide1",
    source: Slide1,
  },
  {
    id: 3,
    name: "slide1",
    source: Slide1,
  },
  {
    id: 4,
    name: "slide1",
    source: Slide1,
  },
  {
    id: 5,
    name: "slide1",
    source: Slide1,
  },
];
const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(slides[0]);

  const changeSlide = function(){
    setInterval(()=>{})
  }
  return (
    <div className="carousel-container">
      <div className="carousel-row">
        <Slide url={currentImage.source} alternativeText={currentImage.name}/>
        {/* {slides.map((item) => (
          <img className="carousel-items" key={item.id} alt={item.name} src={item.source} />
        ))} */}
      </div>
    </div>
  );
};

export default Carousel;
