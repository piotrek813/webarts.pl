import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Button = ({ children, linkTo, color, isSmall, ...props }) => {
  let classNames = 'button';
  if (color) {
    classNames += ` button--color-${color}`;
  }
  if (isSmall) {
    classNames += ' button--is-small';
  }

  return linkTo.startsWith('/') ? (
    <Link href={linkTo} className={classNames} {...props}>
      {children}
    </Link>
  ) : (
    <a href={linkTo} className={classNames} {...props}>
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'dark-blue']),
  isSmall: PropTypes.bool,
};

Button.defaultProps = {
  linkTo: '#',
  color: 'secondary',
  isSmall: false,
};

export default Button;
