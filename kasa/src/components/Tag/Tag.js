import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

Tag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;