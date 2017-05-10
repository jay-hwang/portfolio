import React from 'react';
import CarouselItem from './carousel_item';

const Carousel = ({ items }) => {
  const scrollLeft = () => {
    $('.carousel-container').animate({
      scrollLeft: '-=153'
    }, 500);
  };

  const scrollRight = () => {
    $('.carousel-container').animate({
      scrollLeft: '+=153'
    }, 500);
  };

  // $('.scrollleft').click(function () {
  //     console.log('ok')
  //     $('#scrollbar').animate({
  //         scrollLeft: '-=153'
  //     }, 1000, 'easeOutQuad');

  const carouselItems = Object.keys(items).map((key, i) => (
    <li className='carousel-item-container' key={i}>
      <CarouselItem item={ items[key] } />
    </li>
  ));

  return (
    <div className='aoeu'>
      <button className='scroll-left arrow' onClick={ scrollLeft }></button>
      <div className='carousel-container'>
        { carouselItems }
      </div>
      <button className='scroll-right arrow' onClick={ scrollRight }></button>
    </div>
  );
};

export default Carousel;
