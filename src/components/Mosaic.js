import React from 'react';
import PropTypes from 'prop-types';

const Mosaic = ({ color }) => (
  <div className={`mosaic mosaic--${color}`}>
    <div className="mosaic__square mosaic__square--left-bottom" />
    <div className="mosaic__square mosaic__square--right-top" />
  </div>
);

Mosaic.propTypes = {
  color: PropTypes.oneOf(['dark', 'light']).isRequired,
};

export default Mosaic;
