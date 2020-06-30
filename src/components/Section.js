import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ h, p, img, color, center, isMirror }) => {
  let classNames = 'section';
  if (color) {
    classNames += ` section--${color}`;
  }
  if (center) {
    classNames += ' section--center';
  }
  if (isMirror) {
    classNames += ' section--is-mirror';
  }

  return (
    <section className={classNames}>
      <div className="section__content">
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
  center: PropTypes.bool,
  isMirror: PropTypes.bool,
};

Section.defaultProps = {
  h: '',
  p: '',
  img: '',
  color: '',
  center: false,
  isMirror: false,
};

export default Section;
