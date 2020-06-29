import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ className, ...props }) => (
  <button className={`hamburger ${className}`} type="button" {...props}>
    <div className="hamburger__inner" />
  </button>
);

Hamburger.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Hamburger;
