import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Footer from 'components/Footer';

const PostTemplate = ({
  data: {
    allDatoCmsPost: {
      edges: [post],
    },
  },
}) => (
  <>
    <HelmetDatoCms seo={post.node.seoMetaTags} />
    <Nav />
    <main>
      <article className="post-article">
        <header>
          <Hero className="post-article__hero" image={post.node.hero} />
          <h1 className="post-article__heading">{post.node.heading}</h1>
        </header>
        <section className="post-article__meta">
          <span className="post-article__meta-data">{post.node.author}</span>
          <span className="post-article__meta-data">
            {post.node.meta.publishedAt}
          </span>
        </section>
        <section>
          {post.node.content.map((item) => (
            <React.Fragment key={item.id}>
              {item.model.apiKey === 'text' && (
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: item.textNode.childMarkdownRemark.html,
                  }}
                />
              )}
              {item.model.apiKey === 'img' && (
                <Img className="post-article__img" {...item.img} />
              )}
            </React.Fragment>
          ))}
        </section>
      </article>
    </main>
    <Footer />
  </>
);

PostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  query PostQuery($slug: String!) {
    allDatoCmsPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          hero {
            fluid(maxWidth: 1600) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          heading
          meta {
            publishedAt(formatString: "YYYY-MM-DD")
          }
          author
          content {
            ... on DatoCmsText {
              model {
                apiKey
              }
              id
              textNode {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on DatoCmsImg {
              model {
                apiKey
              }
              id
              img {
                fluid(maxWidth: 600) {
                  ...GatsbyDatoCmsFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
