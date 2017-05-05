//import './Update.css';
import React from 'react';


const getLink = props => `https://500px.com${props.url}`;
const getDesc = props => `Image of ${props.name}`;

function PictureCard(props) {
  const data = props.data;
  return (
    <li className="card picture-card">
      <a href={getLink(data)} className="card-content">
        <h3>{data.name}</h3>
        <img src={data.image_url} alt={getDesc(data)} />
      </a>
    </li>
  );
}

export default PictureCard;
