import React from 'react';

const CarouselItemDetail = ({ item }) => {
  const id = `item-detail-${item.id}`;
  const itemDescriptionPs = item.description.split('<br/>').map((substr, i) => (
    <p key={i}>- { substr }</p>
  ));

  return (
    <div className='carousel-item-detail-container display-none' id={id}>
      <div className='carousel-item-detail'>
        <img src={ item.image_url } />

        <div className='carousel-item-info'>
          <h3>{ item.title }</h3>
          <div className='info'>{ itemDescriptionPs }</div>
          <div className='stack'>{ item.stack }</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItemDetail;
