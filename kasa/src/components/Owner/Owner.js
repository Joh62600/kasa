import React from 'react';
import PropTypes from 'prop-types';
import './Owner.css';

const Owner = ({ name, picture }) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="owner">
      <div className="owner-name">
        <p className="owner-first-name">{firstName}</p>
        <p className="owner-last-name">{lastName}</p>
      </div>
      <img src={picture} alt={`${name}'s profile`} className="owner-picture" />
    </div>
  );
};

Owner.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Owner;