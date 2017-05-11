import React from 'react';
import CarouselItem from './carousel_item';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    // this.vw = () => $('.carousel-item-container').width() * 4;
    // this.$carouselContainer = $('.carousel-items');
    this.itemKeys = [];
    this.carouselItems = [];

    this.vw = this.vw.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  vw() {
    return $('.carousel-item-container').width() * 4;
  }

  rotateRight() {
    for (let i = 0; i < 3; i++) {
      let first = this.carouselItems.shift();
      this.carouselItems.push(first);
    }
  }

  rotateLeft() {
    for (let i = 0; i < 3; i++) {
      let last = this.carouselItems.pop();
      this.carouselItems.unshift(last);
    }
  }

  scrollLeft() {
    console.log('scrollLeft');
    $('.carousel-items').animate({ scrollLeft: `-=${this.vw()}` }, 500);
    this.rotateLeft();
  }

  scrollRight() {
    console.log('scrollRight');
    $('.carousel-items').animate({ scrollLeft: `+=${this.vw()}` }, 500);
    this.rotateRight();
  }

  render() {
    if (Object.keys(this.props.items).length > 0 && this.itemKeys.length <= 0) {
      console.log('set itemkeys & carouselItems');
      this.itemKeys = Object.keys(this.props.items);
      this.carouselItems = this.itemKeys.map((key, i) => (
        <li key={i}><CarouselItem item={ this.props.items[key] } /></li>
      ));
    }

    return (
      <div className='carousel'>
        <button className='scroll-left arrow' onClick={ this.scrollLeft }></button>
        <div className='carousel-items'>{ this.carouselItems }</div>
        <button className='scroll-right arrow' onClick={ this.scrollRight }></button>
      </div>
    );
  }
}

export default Carousel;
// import React from 'react';
// import CarouselItem from './carousel_item';
// import { CarouselFakerLeft, CarouselFakerRight } from './carousel_faker';
//
// const Carousel = ({ items }) => {
//   const vw = () => $('.carousel-item-container').width() * 4;
//   const $carouselContainer = $('.carousel-items');
//   const itemKeys = Object.keys(items);
//   let carouselItems = itemKeys.map((key, i) => (
//     <li key={i}><CarouselItem item={ items[key] } /></li>
//   ));
//
//   const rotateRight = () => {
//     for (let i = 0; i < 3; i++) {
//       let first = carouselItems.shift();
//       carouselItems.push(first);
//     }
//   };
//
//   const rotateLeft = () => {
//     for (let i = 0; i < 3; i++) {
//       let last = carouselItems.pop();
//       carouselItems.unshift(last);
//     }
//   };
//
//   const scrollLeft = () => {
//     $carouselContainer.animate({ scrollLeft: `-=${vw()}` }, 500);
//     rotateLeft();
//   };
//
//   const scrollRight = () => {
//     $carouselContainer.animate({ scrollLeft: `+=${vw()}` }, 500);
//     rotateRight();
//   };
//
//   return (
//     <div className='carousel'>
//       <button className='scroll-left arrow' onClick={ scrollLeft }></button>
//       <div className='carousel-items'>{ carouselItems }</div>
//       <button className='scroll-right arrow' onClick={ scrollRight }></button>
//     </div>
//   );

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
