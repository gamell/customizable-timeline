import React, { Component } from 'react';

class ProjectUpdates extends Component {
  render() {
    return (
      <div className="Timeline">
        <p className="intro">
          Github Updates
        </p>
        <ul className="App-header">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default ProjectUpdates;
