import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const PostReference = ({ h, p, img }) => (
  <div className="post-reference">
    <img src={img} alt="" className="post-reference__img" />
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
  img: PropTypes.string.isRequired,
};

export default PostReference;
