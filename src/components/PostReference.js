import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Img from 'gatsby-image';

const PostReference = ({ h, p, hero }) => (
  <div className="post-reference">
    <Img className="post-reference__img" {...hero} />
    <div className="post-reference__content">
      <h3 className="post-reference__h">{h}</h3>
      <p className="post-reference__p">{p}</p>
      <Button isSmall color="primary">
        Więcej
      </Button>
    </div>
  </div>
);

PostReference.propTypes = {
  h: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  hero: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

export default PostReference;
