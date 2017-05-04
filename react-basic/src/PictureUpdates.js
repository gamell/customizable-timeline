import React, { Component } from 'react';
import PictureUpdate from './PictureUpdate';
import './App.css';

class PictureUpdates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //data: props.data
    }
  }

  componentDidMount() {
    // fetch AJAX here
  }

  render() {
    return (
      <div className="Timeline">
        <p className="intro">
          500px updates
        </p>
        <ul className="Updates photo">
          {
            this.props.data.photos.map(function(p){
              return <PictureUpdate data={p} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default PictureUpdates;
