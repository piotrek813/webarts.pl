import React from 'react';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Button from 'components/Button';
import hero from 'images/undraw_coding.svg';

const Header = () => (
  <header className="header">
    <Nav />
    <div className="hero-section">
      <div className="header__content">
        <h1 className="header__h">Stwórzmy razem twoją nową stronę</h1>
        <p className="header__p">
          Piotr Smoliński Fontend dev | JS React Gatsby
        </p>
        <Button>Get in touch</Button>
      </div>
      <Hero svg={hero} />
    </div>
  </header>
);

export default Header;
