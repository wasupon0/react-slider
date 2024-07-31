import React, { useState } from "react";
import "./Slider.css";
// import BtnSlider from "./BtnSlider";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}/Images/image_0${
                index + 1
              }.webp`}
            />
            <p>{obj.title}</p>
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              onClick={() => setSlideIndex(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
