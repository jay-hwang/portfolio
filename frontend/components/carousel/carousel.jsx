import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div className='profile-image'></div>
        <div className='github-image my-link'>
          <div className='my-link-cover'></div>
        </div>
        <div className='linkedin-image my-link'>
          <div className='my-link-cover'></div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
