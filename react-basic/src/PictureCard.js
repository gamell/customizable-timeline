//import './Update.css';
import React from 'react';


const getLink = props => `https://500px.com${props.url}`;
const getDesc = props => `Image of ${props.name}`;

function PictureCard(props) {
  const data = props.data;
  return (
    <li className="photo-card">
      <h2><a href={getLink(data)}>{data.name}</a></h2>
      <a href={getLink(data)}>
        <img src={data.image_url} alt={getDesc(data)} />
      </a>
    </li>
  );
}

export default PictureCard;
