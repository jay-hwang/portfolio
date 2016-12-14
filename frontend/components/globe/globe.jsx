import React from 'react';
import Carousel from '../carousel/carousel';

class Globe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='globe-container'>
        <Carousel />
      </div>
    );
  }
}

export default Globe;
