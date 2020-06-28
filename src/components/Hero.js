import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Hero = ({ image }) => (
  <Img
    className="hero-image"
    fluid={image.fluid}
    alt={image.alt}
    title={image.title}
  />
);

Hero.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Hero;
