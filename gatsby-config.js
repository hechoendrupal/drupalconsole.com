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
              rel: "external",
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
