import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

const Rating = ({ value }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={index < value ? 'star filled' : 'star'}>★</span>
  ));

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;