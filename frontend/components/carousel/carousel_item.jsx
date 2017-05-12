import React from 'react';

const CarouselItem = ({ item }) => {
  return (
    <div className='carousel-item-container'>
      <div className='carousel-item'>
        <div className='carousel-item-img-container'>
          <img className='carousel-item-img'
            src={ item.image_url }/>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
