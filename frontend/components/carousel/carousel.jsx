
import React from 'react';
import CarouselItem from './carousel_item';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.itemKeys = [];
    this.carouselItems = [];

    this.state = {
      leftBalance: 0,
      rightBalance: 3
    };

    this.vw = this.vw.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  vw() {
    return $('.carousel-item-container').width() * 4 * .667;
  }

  rotateRight() {
    for (let i = 0; i < 2; i++) {
      let first = this.carouselItems.shift();
      this.carouselItems.push(first);
    }
  }

  rotateLeft() {
    for (let i = 0; i < 2; i++) {
      let last = this.carouselItems.pop();
      this.carouselItems.unshift(last);
    }
  }

  scrollLeft() {
    if (this.state.leftBalance <= 0) { return; }
    this.state.rightBalance++;
    this.state.leftBalance--;
    // this.rotateLeft();
    $('.carousel-items').animate({ scrollLeft: `-=${this.vw()}` }, 500);
    // $('.carousel-items').animate({ left: `+=${this.vw()}` }, 500);
    // $('.carousel-items').animate({ left: `-=${this.vw()}` }, 0);
    // this.forceUpdate();
    if (this.state.rightBalance > 0) {
      $('.scroll-right').fadeIn();
    }
    if (this.state.leftBalance <= 0) {
      $('.scroll-left').fadeOut();
    }
  }

  scrollRight() {
    if (this.state.rightBalance <= 0) { return; }
    this.state.leftBalance++;
    this.state.rightBalance--;
    // this.rotateRight();
    $('.carousel-items').animate({ scrollLeft: `+=${this.vw()}` }, 500);
    // $('.carousel-items').animate({ left: `-=${this.vw()}` }, 500);
    // $('.carousel-items').animate({ left: `+=${this.vw()}` }, 0);
    // this.forceUpdate();
    if (this.state.leftBalance > 0) {
      $('.scroll-left').fadeIn();
    }
    if (this.state.rightBalance <= 0) {
      $('.scroll-right').fadeOut();
    }
  }

  render() {
    if (Object.keys(this.props.items).length > 0 && this.itemKeys.length <= 0) {
      this.itemKeys = Object.keys(this.props.items);
      this.carouselItems = this.itemKeys.map((key, i) => (
        <li key={i}><CarouselItem item={ this.props.items[key] } /></li>
      ));
    }

    return (
      <div className='carousel'>
        <div className='scroll-left arrow display-none' onClick={ this.scrollLeft }>
          <button className='scroll-button'>
            <img className='arrow-img'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493512202/left-arrow_sbunnt.png' />
          </button>
        </div>

        <div className='carousel-items'>{ this.carouselItems }</div>

        <div className='scroll-right arrow' onClick={ this.scrollRight }>
          <button className='scroll-button'>
            <img className='arrow-img'
              src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1493511005/arrow_r5mjhk.png' />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;



  //
  // let speed = 5000;
  //     // run   = setInterval(rotate , speed);
  //
  // const itemWidth   = $('#carousel li').outerWidth();
  // const leftValue   = itemWidth * ( -1 );
  // const $carouselUl = $('#carousel ul');
  //
  // $('#carousel li:first').before($('#slides li:last'));
  // $carouselUl.css({ 'left': leftValue });
  //
  // const scrollLeft = () => {
  //   let rightPos = parseInt($carouselUl.css('left')) + itemWidth;
  //   $carouselUl.animate({ 'left': rightPos }, 200, () => {
  //     $('#carousel li:first').before($('#carousel li:last'));
  //     $carouselUl.css({ 'left': rightPos });
  //   });
  //   return false;
  // };
  //
  // const scrollRight = () => {
  //   let leftPos = parseInt($carouselUl.css('left')) - itemWidth;
  //   $carouselUl.animate({ 'left': leftPos }, 200, () => {
  //     $('#carousel li:late').after($('#carousel li:first'));
  //     $('#carousel ul').css({ 'left': leftPos });
  //   });
  //   return false;
  // };
  //
  // const carouselHover = () => {
  //   // clearInterval(run);
  //   // run = setInterval(rotate , speed);
  // };
  //
  // function rotate() {
  //   $('#right').click();
  // }
  //
  // return (
  //   <div id='carousel-container'>
  //     <div id='carousel-buttons'>
  //       <button id='left' onClick={ scrollLeft }></button>
  //       <button id='right' onClick={ scrollRight }></button>
  //       <div className='clear'></div>
  //     </div>
  //
  //     <div className='clear'></div>
  //
  //     <div id='carousel' onMouseOver={ carouselHover }>
  //       <ul>
  //         { carouselItems }
  //       </ul>
  //       <div className='clear'></div>
  //     </div>
  //   </div>
  // );
// };
//
// export default Carousel;
