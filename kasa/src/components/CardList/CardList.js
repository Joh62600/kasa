import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import './CardList.css';
import logements from '../../data/logement.json';

const CardList = () => {
  return (
    <div className="card-list">
      {logements.map(logement => (
        <NavLink key={logement.id} to={`/FicheLogement/${logement.id}`}>
          <Card id={logement.id} title={logement.title} cover={logement.cover} />
        </NavLink>
      ))}
    </div>
  );
}

export default CardList;