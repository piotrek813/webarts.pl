import React from 'react';
import PropTypes from 'prop-types';

const Mosaic = ({ color }) => {
  let classNames = 'mosaic';
  if (color === 'primary' || color === 'dark-blue') {
    classNames += ' mosaic--light';
  } else if (color === 'secondary') {
    classNames += ' mosaic--dark-blue';
  } else if (color === 'dark') {
    classNames += ' mosaic--dark';
  }

  return (
    <div className={classNames}>
      <div className="mosaic__square mosaic__square--left-bottom" />
      <div className="mosaic__square mosaic__square--right-top" />
    </div>
  );
};
Mosaic.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'dark-blue'])
    .isRequired,
};

export default Mosaic;
