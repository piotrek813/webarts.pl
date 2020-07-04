import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Mosaic from 'components/Mosaic';
import Button from 'components/Button';

const Section = ({ h, p, img, linkTo, color, isCenter, isMirror, isWide }) => {
  let classNames = 'section';
  if (color) {
    classNames += ` section--color-${color}`;
  }
  if (isCenter) {
    classNames += ' section--is-center';
  }
  if (img !== '' && img !== null && Object.keys(img).length !== 0) {
    classNames += ' section--is-grid';

    if (isMirror) {
      classNames += ' section--is-mirror';
    }
    if (isWide) {
      classNames += ' section--is-wide';
    }
  }

  return (
    <section className={classNames}>
      <div className="section__content">
        {color !== '' && <Mosaic color={color} />}
        {h !== '' && <h2 className="section__h">{h}</h2>}
        {p.childMarkdownRemark.html !== '' && (
          <div
            className="section__p"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: p.childMarkdownRemark.html,
            }}
          />
        )}
        {linkTo !== '' && <Button linkTo={linkTo}>Zobacz</Button>}
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
  linkTo: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark-blue', 'dark', '']),
  isCenter: PropTypes.bool,
  isMirror: PropTypes.bool,
  isWide: PropTypes.bool,
};

Section.defaultProps = {
  h: '',
  p: {},
  img: {},
  linkTo: '',
  color: '',
  isCenter: false,
  isMirror: false,
  isWide: false,
};

export default Section;
