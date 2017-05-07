import React from 'react';

const ArrowLeft = ({ scrollLeft }) => (
  <div className='mobile-circle-box mobile-circle-box-left display-none'>
    <div className='left-circle-mobile mobile-circle' onClick={ scrollLeft }>
      <img className='arrow-img-mobile'
        src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493512202/left-arrow_sbunnt.png' />
    </div>
  </div>
);

export default ArrowLeft;
