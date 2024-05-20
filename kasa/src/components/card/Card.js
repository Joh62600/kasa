import React from 'react';
import './Card.css';

const Card = ({ title, cover }) => {
  return (
    <div id='card'>
      <img src={cover} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;