import React, { Component } from 'react';
import PictureCard from './PictureCard';
import axios from 'axios';

const url = `https://api.500px.com/v1/photos?feature=user&username=gamell&sort=created_at&image_size=4&consumer_key=cdpKv8cJK8u78zzqd8WdUUlRGx1In8k0pDrviX62`

class PictureUpdates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(url).then(res => {
      this.setState({photos: res.data.photos})
    }).catch(reason => console.log(`ERROR: ${reason}`));
  }

  render() {
    return (
      <section className="section section-pictures">
        <p className="intro">
          500px updates bla bla bla bla bla
        </p>
        <ul className="updates updates-pictures">
          {
            this.state.photos.map(function(p){
              return <PictureCard key={p.id} data={p} />
            })
          }
        </ul>
      </section>
    );
  }
}

export default PictureUpdates;
