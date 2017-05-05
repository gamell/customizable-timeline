import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <div className="Timeline">
        <p className="intro">
          Test 500px timeline
        </p>
        <ul className="App-header">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default Timeline;
