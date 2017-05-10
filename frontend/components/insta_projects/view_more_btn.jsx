import React from 'react';

const ViewMoreBtn = () => {
  const state = {
    clickCount: 0
  };

  const handleClick = () => {
    if (state.clickCount < 2) {
      state.clickCount++;
      $(`#projectLis${state.clickCount}`).fadeIn();
    } else {
      // alert('should show new page of projects');
    }
    if (state.clickCount == 2) { $('.view-more-btn').fadeOut(); }
  };

  return (
    <button className='view-more-btn' onClick={ handleClick }>
      View More Projects
    </button>
  );
};
export default ViewMoreBtn;
