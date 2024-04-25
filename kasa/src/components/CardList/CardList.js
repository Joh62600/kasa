import React from 'react';
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
        <Card key={card.id} title={card.title} />
      ))}
    </div>
  );
}

export default CardList;