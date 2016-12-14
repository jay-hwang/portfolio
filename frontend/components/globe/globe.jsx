import React from 'react';
import Carousel from '../carousel/carousel';

class Globe extends React.Component {
  constructor(props) {
    super(props);

    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {

  }

  render() {
    debugger;
    return (
      <div className='globe-container'
           onClick={this.toggleImage}>
        <Carousel />
      </div>
    );
  }
}

export default Globe;
