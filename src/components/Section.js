import React from 'react';
import PropTypes from 'prop-types';
import Mosaic from 'components/Mosaic';
import Img from 'gatsby-image';

const Section = ({ h, p, img, color, isCenter, isMirror, isWide }) => {
  let classNames = 'section';
  if (color) {
    classNames += ` section--color-${color}`;
  }
  if (isCenter) {
    classNames += ' section--is-center';
  }
  if (isMirror && img !== '' && img !== null) {
    classNames += ' section--is-mirror';
  }
  if (isWide) {
    classNames += ' section--is-wide';
  }
  if (img === '' || (img === null && !isCenter)) {
    classNames += ' section--is-align-left';
  }

  return (
    <section className={classNames}>
      <div className="section__content">
        {color !== '' && <Mosaic color={color} />}
        {h !== '' && <h2 className="section__h">{h}</h2>}
        {Object.keys(p).length !== 0 && (
          <div
            className="section__p"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: p.childMarkdownRemark.html,
            }}
          />
        )}
      </div>
      {img !== null &&
        Object.keys(img).length !== 0 &&
        (img.fluid ? (
          <Img className="section__img" {...img} />
        ) : (
          <img
            className="section__img"
            src={img.url}
            alt={img.alt}
            title={img.title}
          />
        ))}
    </section>
  );
};

Section.propTypes = {
  h: PropTypes.string,
  p: PropTypes.objectOf(PropTypes.object),
  img: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
  color: PropTypes.oneOf(['primary', 'secondary', 'dark-blue', 'dark', '']),
  isCenter: PropTypes.bool,
  isMirror: PropTypes.bool,
  isWide: PropTypes.bool,
};

Section.defaultProps = {
  h: '',
  p: {},
  img: {},
  color: '',
  isCenter: false,
  isMirror: false,
  isWide: false,
};

export default Section;
