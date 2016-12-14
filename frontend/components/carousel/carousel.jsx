import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleAbout() {
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".about-me").removeClass("display-none");
    $(".modal").addClass("hide");
    $(".resume").addClass("display-none");

    setTimeout(() => {
      $(".name").fadeIn();
      $(".intro").fadeIn();
    }, 400);

    $(".about-detail").slideUp();
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
        <div
          onClick={this.toggleAbout}
          className='profile-image my-link'>
          <div className='my-link-cover'></div>
        </div>

        <div className='github-image my-link'>
          <a
            className='my-link-cover'
            target="_blank"
            alt="GitHub"
            href="https://github.com/jay-hwang/">
            <div className='my-link-cover'></div>
          </a>
        </div>

        <div className='linkedin-image my-link'>
          <a
            className='my-link-cover'
            target="_blank"
            alt="LinkedIn"
            href="https://www.linkedin.com/in/jay-hwang">
            <div className='my-link-cover'></div>
          </a>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
