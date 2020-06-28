import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Nav from 'components/Nav';
import Hero from 'components/Hero';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <header className="header">
      <Nav />
      <Hero image={data.file.childImageSharp} />
      <div className="header__content">
        <h1 className="header__h">Some heading</h1>
        <p className="header__p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          expedita animi eos sequi accusantium ullam commodi dolores asperiores
          libero exercitationem?
        </p>
      </div>
    </header>
  );
};

export default Header;
