import React, { Component } from 'react';
import PictureUpdates from './PictureUpdates'
import ProjectUpdates from './ProjectUpdates'
import BlogUpdates from './BlogUpdates'
import pictureData from './picture-data.json'
import './App.css';

class TimelineUpdates extends Component {
  constructor() {
    super();
    this.state = {
      //pictureData
    };
  }
  render() {
    return (
      <div className="Timelines">
        <PictureUpdates
          data={pictureData}
        />
        <ProjectUpdates />
        <BlogUpdates />
      </div>
    );
  }
}

export default TimelineUpdates;
