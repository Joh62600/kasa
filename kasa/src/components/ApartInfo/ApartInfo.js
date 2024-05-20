import React from 'react';
import PropTypes from 'prop-types';
import './ApartInfo.css';

const ApartInfo = ({ title, location }) => {
  return (
    <div className="apart-info">
      <h2 className="apart-title">{title}</h2>
      <p className="apart-location">{location}</p>
    </div>
  );
};

ApartInfo.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ApartInfo;