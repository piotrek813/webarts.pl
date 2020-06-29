import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ svg }) => (
  <img className="hero-section__image" src={svg} alt="" />
);

Hero.propTypes = {
  svg: PropTypes.string.isRequired,
};

export default Hero;
