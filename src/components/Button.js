import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, color, isSmall }) => {
  let classNames = 'button';
  if (color) {
    classNames += ` button--color-${color}`;
  }
  if (isSmall) {
    classNames += ' button--is-small';
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={classNames}>
      {children}
    </a>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'dark-blue']),
  isSmall: PropTypes.bool,
};

Button.defaultProps = {
  color: 'secondary',
  isSmall: false,
};

export default Button;
