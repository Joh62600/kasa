import React from 'react';
import './Card.css';  



const Card = ({title, cover}) => {
    return(
        <div id='card'>
            <img src={cover} alt={title} className="card-image" />
            <div className="card-title">{title}</div>

        </div>

    );
}

export default Card;