import React from 'react';
import PropTypes from 'prop-types';
import PostReference from 'components/PostReference';

const PostsGroup = ({ h }) => (
  <section className="posts-group">
    <h2 className="posts-group__h">{h}</h2>
    <div className="posts-group__container">
      <PostReference
        h="Headless Cms vs Standard"
        p="Sed nec pulvinar velit faucibus sit eu sed sagittis. Convallis duis duis eget vel morbi nunc."
        img="https://source.unsplash.com/600x600/?technology,programming"
      />
      <PostReference
        h="SSR vs SSG"
        p="Sed nec pulvinar velit faucibus sit eu sed sagittis. Convallis duis duis eget vel morbi nunc."
        img="https://source.unsplash.com/600x601/?technology,programming"
      />
      <PostReference
        h="React, Vue, Angluar"
        p="Sed nec pulvinar velit faucibus sit eu sed sagittis. Convallis duis duis eget vel morbi nunc."
        img="https://source.unsplash.com/600x602/?technology,programming"
      />
    </div>
  </section>
);

PostsGroup.propTypes = {
  h: PropTypes.string,
};

PostsGroup.defaultProps = {
  h: '',
};

export default PostsGroup;
