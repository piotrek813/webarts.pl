import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ image: { url, alt, title } }) => (
  <img className="hero-section__image" src={url} alt={alt} title={title} />
);

Hero.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Hero;
