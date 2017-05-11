import React from 'react';
import CarouselItem from './carousel_item';
import { CarouselFakerLeft, CarouselFakerRight } from './carousel_faker';

const Carousel = ({ items }) => {
  // const vw = () => $('.carousel-item-container').width() * 4;
  // const $carouselContainer = $('.carousel-items');
  // const itemKeys = Object.keys(items);
  // const carouselItems = itemKeys.map((key, i) => (
  //   <li key={i}><CarouselItem item={ items[key] } /></li>
  // ));
  //
  // const scrollLeft = () => {
  //   $('.carousel-items li:first').before($('.carousel-items li:last'));
  //   $carouselContainer.animate({ scrollLeft: `-=${vw()}` }, 500);
  // };
  //
  // const scrollRight = () => {
  //   $carouselContainer.animate({ scrollLeft: `+=${vw()}` }, 500);
  // };

  // return (
  //   <div className='carousel'>
  //     <button className='scroll-left arrow' onClick={ scrollLeft }></button>
  //     <div className='carousel-items'>{ carouselItems }</div>
  //     <button className='scroll-right arrow' onClick={ scrollRight }></button>
  //   </div>
  // );

  
};

export default Carousel;
