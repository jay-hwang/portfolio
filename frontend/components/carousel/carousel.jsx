import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleHomeAlt = this.toggleHomeAlt.bind(this);
    this.toggleGitAlt = this.toggleGitAlt.bind(this);
    this.toggleLinkedAlt = this.toggleLinkedAlt.bind(this);

    this.state = {
      showAlt: false
    };
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

  toggleHomeAlt() {
    if (this.state.showAlt) {
      $(".home-alt").fadeOut();
      this.state.showAlt = false;
    } else {
      setTimeout(() => {
        $(".home-alt").fadeIn();
      }, 1500);
      this.state.showAlt = true;
    }
  }

  toggleGitAlt() {
    if (this.state.showAlt) {
      $(".git-alt").fadeOut();
      this.state.showAlt = false;
    } else {
      setTimeout(() => {
        $(".git-alt").fadeIn();
      }, 1500);
      this.state.showAlt = true;
    }
  }

  toggleLinkedAlt() {
    if (this.state.showAlt) {
      $(".linkedin-alt").fadeOut();
      this.state.showAlt = false;
    } else {
      setTimeout(() => {
        $(".linkedin-alt").fadeIn();
      }, 1500);
      this.state.showAlt = true;
    }
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

    return (
      <Slider {...settings}>
        <div
          onClick={this.toggleAbout}
          className='profile-image my-link'>
          <div className='my-link-cover'>
            <div className='home-alt alt'>HOME</div>
          </div>
        </div>

        <div className='github-image my-link'>
          <a
            className='my-link-cover'
            target="_blank"
            href="https://github.com/jay-hwang/">
            <div className='my-link-cover'>
              <div className='git-alt alt'>GITHUB</div>
            </div>
          </a>
        </div>

        <div className='linkedin-image my-link'>
          <a
            className='my-link-cover'
            target="_blank"
            href="https://www.linkedin.com/in/jay-hwang">
            <div className='my-link-cover'>
              <div className='linkedin-alt alt'>LINKEDIN</div>
            </div>
          </a>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
