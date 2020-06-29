import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" className="button button--dark">
    {children}
  </a>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
