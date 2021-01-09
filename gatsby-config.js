const path = require('path');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Webarts.pl`,
    description: `Webarts.pl`,
    author: `@piotrek813`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        DisallowSymLinks: true,
        // SymLinksIfOwnerMatch: true,
        host: 'webarts.pl',
        ErrorDocument: `
          ErrorDocument 404 404.html
        `,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        scss: path.join(__dirname, 'src/scss'),
        utils: path.join(__dirname, 'src/utils'),
        templates: path.join(__dirname, 'src/templates'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webarts.pl`,
        short_name: `Webarts`,
        start_url: `/`,
        background_color: `#3475D6`,
        theme_color: `#3475D6`,
        display: `minimal-ui`,
        icon: `src/images/webarts.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
};
