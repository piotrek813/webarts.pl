import React from 'react';
import PropTypes from 'prop-types';
import 'scss/main.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Template = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Template;
