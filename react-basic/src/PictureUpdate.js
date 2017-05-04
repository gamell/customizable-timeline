//import './Update.css';
import React from 'react';


const getLink = props => `https://500px.com${props.url}`;
const getDesc = props => `Image of ${props.name}`;

function PictureUpdate(props) {
  const data = props.data;
  return (
    <div className="photo-update">
      <h2><a href={getLink(data)}>{data.name}</a></h2>
      <a href={getLink(data)}>
        <img src={data.image_url} alt={getDesc(data)} />
      </a>
    </div>
  );
}

export default PictureUpdate;
