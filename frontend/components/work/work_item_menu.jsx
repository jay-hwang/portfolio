import React from 'react';
import { withRouter } from 'react-router';

class WorkItemMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    $(`#work-item-detail-${this.props.project.id}`).fadeIn();
    $('.work-items').fadeOut();
    $('.modal-header').fadeOut();
    $('.close').fadeOut();
  }

  render() {
    return (
      <div
        id={this.props.project.id}
        onClick={this.handleClick}
        className='work-item-menu'>
        <span>MORE INFO</span>
      </div>
    );
  }
}

export default withRouter(WorkItemMenu);
