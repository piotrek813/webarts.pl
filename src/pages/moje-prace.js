import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Template from 'templates/Template';
import Section from 'components/Section';

const MyWorksPage = ({
  data: {
    datoCmsPortfolio,
    allDatoCmsWork: { edges: works },
  },
}) => {
  const colors = ['secondary', 'primary', 'dark'];
  let colorsIterator = 0;
  const getNextColor = () => {
    if (colorsIterator >= colors.length) colorsIterator = 0;

    const color = colors[colorsIterator];
    colorsIterator += 1;

    return color;
  };

  return (
    <Template
      hero={{
        heading: datoCmsPortfolio.heading,
        paragraph: datoCmsPortfolio.paragraph,
        hero: datoCmsPortfolio.hero,
      }}
    >
      {works.map(({ node: { heading, paragraphNode, image, link } }, i) => (
        <Section
          isWide
          key={heading}
          isMirror={i % 2 !== 0}
          color={getNextColor()}
          h={heading}
          p={paragraphNode}
          img={image}
          linkTo={link}
        />
      ))}
    </Template>
  );
};

export const query = graphql`
  query MyWorkQuery {
    datoCmsPortfolio {
      heading
      paragraph
      hero {
        url
        alt
        title
      }
    }
    allDatoCmsWork {
      edges {
        node {
          heading
          paragraphNode {
            childMarkdownRemark {
              html
            }
          }
          link
          image {
            fluid(maxWidth: 800) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

MyWorksPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MyWorksPage;
