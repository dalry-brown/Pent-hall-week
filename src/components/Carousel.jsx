import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    };

    return (
    <div className='carousel-container'>
    <Slider {...settings} backgroundColor='red'>
      {images.map((image, index) => (
        <div key={index}>
          <img className='carousel-img' src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
        <div className="carousel-arrows">
        <button className="prev-arrow">{'<'}</button>
        <button className="next-arrow">{'>'}</button>
        </div>
    </div>
  );
};

export default Carousel;
