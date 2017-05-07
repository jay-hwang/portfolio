import React from 'react';

const ArrowRight = ({ scrollRight }) => (
  <div className='mobile-circle-box mobile-circle-box-right'>
    <div className='right-circle-mobile mobile-circle' onClick={ scrollRight }>
      <img className='arrow-img-mobile'
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493511005/arrow_r5mjhk.png' />
    </div>
  </div>
);

export default ArrowRight;
