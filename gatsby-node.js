const path = require(`path`)
const axios = require('axios');
const crypto = require('crypto');
const qs = require('qs');

const repos = [
  'drupal-console',
  'drupal-console-core',
  'drupal-console-en',
  'drupal-console-launcher',
];

const GITHUB_API_ARI = 'https://us-central1-drupal-console.cloudfunctions.net';

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Mdx implements Node {
      fileInfo: File @link(from: "parent")
    }
  `)
}

exports.sourceNodes = async ({ actions }) => {
  const {createNode} = actions;

  for (repo of repos) {
    const releases = await axios({
      method: 'post',
      url: `${GITHUB_API_ARI}/getReleases`,
      data: qs.stringify({
        owner: 'hechoendrupal',
        repo: repo,
      }),
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    for (const release of releases.data) {
      const id = release.id.toString();
      delete release.id;
      await createNode({
        children: [],
        id: id,
        repo: repo,
        ...release,
        parent: null,
        internal: {
          type: 'Release',
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(release))
            .digest(`hex`),
        },
      });
    }
  }

  const contributors = await axios.get(`${GITHUB_API_ARI}/getContributors`);
  for (const contributor of contributors.data) {
    const id = contributor.id.toString();
    delete contributor.id;
    await createNode({
      children: [],
      id: id,
      ...contributor,
      parent: null,
      internal: {
        type: 'Contributor',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(contributor))
          .digest(`hex`),
      },
    });
  }

  const packagist = await axios.get(`https://packagist.org/packages/drupal/console.json`);
  const latestRelease = await axios.get(`${GITHUB_API_ARI}/getLatestRelease`);

  await createNode({
    children: [],
    id: latestRelease.data.version,
    stars: packagist.data.package.github_stars,
    watchers: packagist.data.package.github_watchers,
    forks: packagist.data.package.github_forks,
    open_issues: packagist.data.package.github_open_issues,
    dependents: packagist.data.package.dependents,
    downloads_phar: 895799, // calculated from downloads as phar, before using as local composer dependency 
    downloads_packagist: packagist.data.package.downloads.total,
    downloads_total: 895799 + packagist.data.package.downloads.total,
    favers: packagist.data.package.favers,
    contributors: contributors.data.length,
    latest_release: latestRelease.data.version,
    parent: null,
    internal: {
      type: 'Statistic',
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(packagist.data))
        .digest(`hex`),
    },
  });

};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // MDX content
  if (node.internal.type === `Mdx`) {
    const sourceInstanceName = getNode(node.parent).sourceInstanceName;

    if (sourceInstanceName===`docs`) {
      const slug = getNode(node.parent).relativePath.replace("/README.md", "").replace(".md", "").toLowerCase()

      // Add slug field
      createNodeField({
        name: `slug`,
        node,
        value: `/${sourceInstanceName}/${slug}`
      })

      // Add language field
      createNodeField({
        name: `language`,
        node,
        value: slug.indexOf('/') > 0 ? slug.substring(0, slug.indexOf('/')) : slug
      })
    }
    else{
      // Add language field
      createNodeField({
        name: `language`,
        node,
        value: 'en'
      })
    }

    if (sourceInstanceName===`articles` || sourceInstanceName===`changelog` || sourceInstanceName===`pages`) {
      const slug = node.frontmatter.path
      // Add slug field
      createNodeField({
        name: `slug`,
        node,
        value: slug
      })
      // Add language field
      // createNodeField({
      //   name: `language`,
      //   node,
      //   value: 'en'
      // })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDocs: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "docs"}}}) {
        edges {
          node {
            fields {
              slug
              language
            }
            rawBody
            excerpt
          }
        }
      }

      allArticles: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "articles"}}}) {
        edges {
          node {
            fields {
              slug
              language
            }
            rawBody
          }
        }
      }

      allPages: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "pages"}}}) {
        edges {
          node {
            fields {
              slug
              language
            }
            rawBody
          }
        }
      }

      allChangelog: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "changelog"}}}) {
        edges {
          node {
            fields {
              slug
              language
            }
          }
        }
      }

      allLanguages: allLanguagesYaml {
        edges {
          node {
            id
            slug
            name
          }
        }
      }

      allCommands: allDataJson(filter: {type: {eq: "commands"}}) {
        edges {
          node {
            language
            commands {
              name
              description
              dashed
              aliases
              options {
                description
                name
              }
              arguments {
                description
                name
              }
              examples {
                description
                execution
              }
              messages {
                arguments
                details
                options
                usage
                examples
                argument
                option
              }
            }
          }
        }
      }

    }
    `).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create doc pages.
      const docs = result.data.allDocs.edges
      docs.forEach(doc => {
        createPage({
          path: doc.node.fields.slug,
          component: path.resolve(`./src/templates/doc.js`),
          context: {
            slug: doc.node.fields.slug,
            language: doc.node.fields.language
          },
        })
      })

      // Create article pages.
      const articles = result.data.allArticles.edges
      articles.forEach(article => {
        createPage({
          path: article.node.fields.slug,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: article.node.fields.slug,
            language: article.node.fields.language
          },
        })
      })

      // Create page pages.
      const pages = result.data.allPages.edges
      pages.forEach(page => {
        createPage({
          path: page.node.fields.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: page.node.fields.slug,
            language: page.node.fields.language
          },
        })
      })

      // Create changelog pages.
      const releases = result.data.allChangelog.edges
      releases.forEach(changelog => {
        createPage({
          path: changelog.node.fields.slug,
          component: path.resolve(`./src/templates/changelog.js`),
          context: {
            slug: changelog.node.fields.slug,
            language: changelog.node.fields.language
          },
        })
      })

      // Create languag pages.
      const languages = result.data.allLanguages.edges
      languages.forEach(item => {
        const language = item.node.id
        const slug = `docs/${language}/commands/`
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/commands.js`),
          context: {
            slug: slug,
            language: language
          },
        })
      })

      // Create command pages.
      const commands = result.data.allCommands.edges
      commands.forEach(item => {
        const language = item.node.language
        item.node.commands.forEach(command => {
          const slug = `docs/${language}/commands/${command.dashed}`
          createPage({
            path: slug,
            component: path.resolve(`./src/templates/command.js`),
            context: {
              slug: slug,
              language: language,
              command: command
            },
          })
        })
      })

      return null
    })
}
