import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <div className='carousel-item-container'>
      <div className='carousel-item'>
        { item.title }
      </div>
    </div>
  );
};

export default CarouselItem;
