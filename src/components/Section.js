import React from 'react';
import PropTypes from 'prop-types';
import Mosaic from 'components/Mosaic';

const Section = ({ h, p, img, color, isCenter, isMirror, isWide }) => {
  let classNames = 'section';
  if (color) {
    classNames += ` section--${color}`;
  }
  if (isCenter) {
    classNames += ' section--is-center';
  }
  if (isMirror) {
    classNames += ' section--is-mirror';
  }
  if (isWide) {
    classNames += ' section--is-wide';
  }
  if (img === '' && !isCenter) {
    classNames += ' section--is-align-left';
  }

  return (
    <section className={classNames}>
      <div className="section__content">
        {color !== '' && <Mosaic color={color === 'dark' ? 'dark' : 'light'} />}
        {h !== '' && <h2 className="section__h">{h}</h2>}
        {p !== '' && <p className="section__p">{p}</p>}
      </div>
      {img !== '' && <img src={img} alt="" className="section__img" />}
    </section>
  );
};

Section.propTypes = {
  h: PropTypes.string,
  p: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.oneOf(['light', 'dark', 'dark-blue', '']),
  isCenter: PropTypes.bool,
  isMirror: PropTypes.bool,
  isWide: PropTypes.bool,
};

Section.defaultProps = {
  h: '',
  p: '',
  img: '',
  color: '',
  isCenter: false,
  isMirror: false,
  isWide: false,
};

export default Section;
