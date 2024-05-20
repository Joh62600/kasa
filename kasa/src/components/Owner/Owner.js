import React from 'react';
import PropTypes from 'prop-types';
import './Owner.css';

const Owner = ({ name, picture }) => {
  return (
    <div className="owner">
      <p className="owner-name">{name}</p>
      <img src={picture} alt={`${name}'s profile`} className="owner-picture" />
      
    </div>
  );
};

Owner.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Owner;