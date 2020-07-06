import React from 'react';
import PropTypes from 'prop-types';
import PostReference from 'components/PostReference';

const PostsGroup = ({ h, data }) => (
  <section className="posts-group">
    <h2 className="posts-group__h">{h}</h2>
    <div className="posts-group__container">
      {data.map(({ node: { slug, heading, content, hero } }) => (
        <PostReference
          key={slug}
          h={heading}
          p={content[0].textNode.childMarkdownRemark.excerpt}
          linkTo={`/${slug}`}
          hero={hero}
        />
      ))}
    </div>
  </section>
);

PostsGroup.propTypes = {
  h: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

PostsGroup.defaultProps = {
  h: '',
};

export default PostsGroup;
