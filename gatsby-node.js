const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: { allDatoCmsPost },
  } = await graphql(`
    query {
      allDatoCmsPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // eslint-disable-next-line array-callback-return
  allDatoCmsPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/PostTemplate.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
