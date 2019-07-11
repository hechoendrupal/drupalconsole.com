const { isNil } = require('lodash')

const mapPagesUrls = {
  index: '/',
}

module.exports = {
  siteMetadata: {
    title: `DrupalConsole site`,
    description: `DrupalConsole site, docs, cheatsheet`,
    author: `@drupalconsole`,
  },
  mapping: {
    "LanguagesYaml.authors": `AuthorsYaml`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content/docs/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/content/assets/`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer external",
            },
          },
          {
            resolve: 'gatsby-plugin-lunr',
            options: {
              // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
              languages: [
                {
                  name: 'en',
                  filterNodes: (node) => !isNil(node.fields)
                },
                {
                  name: 'fr',
                  filterNodes: node => !isNil(node.fields),
                },
              ],
              // Fields to index. If store === true value will be stored in index file. 
              // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
              fields: [
                // { name: 'title', store: true, attributes: { boost: 20 } },
                { name: 'content', store: true },
                { name: 'url', store: true },
              ],
              // A function for filtering nodes. () => true by default
              // filterNodes: (node) => !isNil(node.frontmatter),
              // How to resolve each field's value for a supported node type 
              resolvers: {
                // For any node of type MarkdownRemark, list how to resolve the fields' values
                allMdx: {
                  // title: (node) => node.frontmatter.title,
                  content: (node) => node.rawBody,
                  url: (node) => node.fields.slug,
                },
              },
            },
          },
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/drupal-console-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
