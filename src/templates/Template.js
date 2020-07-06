import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import 'scss/main.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Template = ({ children, hero }) => {
  const {
    datoCmsHome: { seoMetaTags, hero: heroImage },
  } = useStaticQuery(graphql`
    query {
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        hero {
          url
          alt
          title
        }
      }
    }
  `);

  let heroData = hero;

  if (hero.hero === null || hero.hero === undefined) {
    heroData = { ...hero, hero: heroImage };
  }

  return (
    <>
      <HelmetDatoCms seo={seoMetaTags} />
      <Header hero={heroData} />
      <main>
        <article>{children}</article>
      </main>
      <Footer />
    </>
  );
};

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hero: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

export default Template;
