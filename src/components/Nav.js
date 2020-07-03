import React, { useState } from 'react';
import Hamburger from 'components/Hamburger';

const Nav = () => {
  const [isMenuOpen, toogleMenuState] = useState(false);
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Moje prace', to: '/moje-prace' },
    { label: 'Blog', to: '/blog' },
  ];

  const handleHamburgerClick = () => {
    toogleMenuState(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo">
        <a className="navbar__link" href="/">
          Webarts.pl
        </a>
      </span>
      <ul
        className={`navbar__list ${
          isMenuOpen ? ' navbar__list--is-active' : ''
        }`}
      >
        {navLinks.map(({ label, to }) => (
          <li className="navbar__item" key={label}>
            <a href={to} className="navbar__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger
        onClick={handleHamburgerClick}
        className={isMenuOpen ? 'hamburger--is-active' : ''}
      />
    </nav>
  );
};

export default Nav;
