import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from 'templates/Template';
import PostsGroup from 'components/PostsGroup';

const BlogPage = ({
  data: {
    datoCmsBlog,
    allDatoCmsPost: { edges: posts },
  },
}) => (
  <Template hero={datoCmsBlog}>
    <PostsGroup data={posts} />
  </Template>
);

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query BlogQuery {
    datoCmsBlog {
      heading
      paragraph
      hero {
        url
        alt
        title
      }
    }
    allDatoCmsPost(sort: { fields: meta___publishedAt, order: DESC }) {
      edges {
        node {
          heading
          content {
            ... on DatoCmsText {
              textNode {
                childMarkdownRemark {
                  excerpt(pruneLength: 100)
                }
              }
            }
          }
          hero {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            alt
            title
          }
        }
      }
    }
  }
`;

export default BlogPage;
