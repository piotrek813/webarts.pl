import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from 'templates/Template';
import PostsGroup from 'components/PostsGroup';
import RenderSection from 'components/RenderSections';

const IndexPage = ({
  data: {
    datoCmsHome: { sections, ...datoCmsHome },
    allDatoCmsPost: { edges: posts },
  },
}) => (
  <Template
    hero={{
      heading: datoCmsHome.heading,
      paragraph: datoCmsHome.paragraph,
    }}
  >
    <RenderSection data={sections} />
    <PostsGroup h="Blog" data={posts} />
  </Template>
);

export const query = graphql`
  query HomeQuery {
    datoCmsHome {
      heading
      paragraph

      sections {
        ... on DatoCmsSection {
          id
          model {
            apiKey
          }
          background {
            hex
          }
          isMirror
          image {
            fluid(maxWidth: 800) {
              ...GatsbyDatoCmsFluid
            }
          }
          heading
          paragraphNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsSectionBreakLayout {
          id
          model {
            apiKey
          }
          heading
          paragraphNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsSectionWithReference {
          id
          model {
            apiKey
          }
          background {
            hex
          }
          isMirror
          reference {
            ... on DatoCmsService {
              heading
              paragraphNode {
                childMarkdownRemark {
                  html
                }
              }
              hero {
                url
                alt
                title
              }
            }
          }
        }
      }
    }
    allDatoCmsPost(
      limit: 3
      sort: { fields: meta___publishedAt, order: DESC }
    ) {
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

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;
