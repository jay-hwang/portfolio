import React from 'react';
import WorkItem from './work_item';
import WorkItemDetail from './work_item_detail';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    $(".app-container").removeClass("blur");
    $(".app-content").removeClass("hide");
    $(".work-container").addClass("hide");
  }

  render() {
    let projects = this.props.projects;
    let workLis = Object.keys(projects).map(k => {
      return (
        <WorkItem key={k} project={projects[k]}/>
      );
    });

    let workItemDetails = Object.keys(projects).map(k => {
      return (
        <WorkItemDetail key={k} project={projects[k]}/>
      );
    });

    return (
      <div className='work-container modal hide'>
        <div
          className="close"
          onClick={this.handleClose}>
          x
        </div>

        <h3 className='modal-header'>WORK</h3>

        <ul className='work-items'>
          { workLis }
        </ul>

        <ul className='work-item-details'>
          { workItemDetails }
        </ul>
      </div>
    );
  }
}

export default Work;
