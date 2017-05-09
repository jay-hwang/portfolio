import React from 'react';

const ViewMoreBtn = () => {
  const state = {
    clickCount: 0
  };

  const handleClick = () => {
    if (state.clickCount < 3) {
      state.clickCount++;
      $(`#projectLis${state.clickCount}`).fadeIn();
    } else {
      alert('should show new page of projects');
    }
  };

  return (
    <button className='view-more-btn' onClick={ handleClick }>
      { state.text }
    </button>
  );
};
export default ViewMoreBtn;
