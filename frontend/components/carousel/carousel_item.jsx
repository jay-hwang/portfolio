import React from 'react';
import CarouselItemDetail from './carousel_item_detail';

const CarouselItem = ({ item }) => {
  const handleClick = () => {
    $(`#item-detail-${item.id}`).fadeIn();
    $(`#item-detail-${item.id}`).css('display', 'flex');
  };

  return (
    <div>
      <div className='carousel-item-container' onClick={ handleClick }>
        <div className='carousel-item'>
          <div className='carousel-item-img-container'>
            <img className='carousel-item-img'
              src={ item.image_url }/>
          </div>
        </div>
      </div>

      <CarouselItemDetail item={ item } />
    </div>
  );
};

export default CarouselItem;
