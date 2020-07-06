import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Hero = ({ image }) =>
  image.fluid ? (
    <Img {...image} className="post-article__hero" />
  ) : (
    <img
      className="hero-section__image"
      src={image.url}
      alt={image.alt}
      title={image.title}
    />
  );

Hero.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

export default Hero;
