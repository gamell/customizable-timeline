import React, { Component } from 'react';
import PictureUpdates from './PictureUpdates'
import ProjectUpdates from './ProjectUpdates'
import BlogUpdates from './BlogUpdates'

class TimelineUpdates extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <PictureUpdates />
        <ProjectUpdates />
        <BlogUpdates />
      </div>
    );
  }
}

export default TimelineUpdates;
