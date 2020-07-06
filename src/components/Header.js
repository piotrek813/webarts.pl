import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Button from 'components/Button';

const Header = ({ hero: { heading, paragraph, hero } }) => (
  <header className="header">
    <Nav />
    <div className="hero-section">
      <div className="header__content">
        <h1 className="header__h">{heading}</h1>
        <p className="header__p">{paragraph}</p>
        <Button linkTo="/moje-prace">Zobacz moje prace</Button>
      </div>
      <Hero image={hero} />
    </div>
  </header>
);

Header.propTypes = {
  hero: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

export default Header;
