// ImageSlider.jsx

import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const cont = slides.length;

  const nextSlide = () => {
    setCurrent(current === cont - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? cont - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider-container'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='image' className='image img-fluid' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
