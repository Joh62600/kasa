import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import './CardList.css';

const CardList = () => {
  const cardData = [
    { id: 1, title: "Titre de la Location " },
    { id: 2, title: "Titre de la Location " },
    { id: 3, title: "Titre de la Location " },
    { id: 4, title: "Titre de la Location " },
    { id: 5, title: "Titre de la Location " },
    { id: 6, title: "Titre de la Location " }
  ];

  return (
    <div className="card-list">
      {cardData.map(card => (
        <NavLink key={card.id} to="/FicheLogement">
        <Card title={card.title} />
      </NavLink>
      ))}
    </div>
  );
}

export default CardList;