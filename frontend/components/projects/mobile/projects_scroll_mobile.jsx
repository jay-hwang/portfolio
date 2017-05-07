import React from 'react';
import ProjectsScroll from '../projects_scroll';

const ProjectsScrollMobile = ({ projectLis }) => {
  const scrollBalance = { left: 0, right: 10 };
  const shouldFreeze = { left: false, right: false };
  const toggleFreeze = dir => {
    shouldFreeze[dir] = true;
    setTimeout(() => { shouldFreeze[dir] = false; }, 350);
  };
  const shiftBalance = dir => {
    if (dir === 'right') {
      scrollBalance.right--;
      scrollBalance.left++;
    }
    else {
      scrollBalance.right++;
      scrollBalance.left--;
    }
  };

  const scrollRight = () => {
    if (!shouldFreeze.right) {
      toggleFreeze('right');
      shiftBalance('right');
      let animatePx = $('.project-li').width();
      // let animatePx = $('.projects-window').width();
      $('.projects-ul').animate({ left: `-=${animatePx}` }, 200);
      $('.left-arrow-box').fadeIn(); }
    if (scrollBalance.right <= 0) { $('.right-arrow-box').fadeOut(); }
  };

  const scrollLeft = () => {
    if (!shouldFreeze.left && scrollBalance.left > 0) {
      toggleFreeze('left');
      shiftBalance('left');
      let animatePx = $('.project-li').width();
      // let animatePx = $('.projects-window').width();
      $('.projects-ul').animate({ left: `+=${animatePx}` }, 200);
      $('.right-arrow-box').fadeIn(); }
    if (scrollBalance.left <= 0) { $('.left-arrow-box').fadeOut(); }
  };

  return (
    <div className='mobile'>
      <ProjectsScroll
        projectLis={ projectLis }
        scrollRight={ scrollRight }
        scrollLeft={ scrollLeft } />
    </div>
  );
};

export default ProjectsScrollMobile;
