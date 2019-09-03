const path = require(`path`)
const axios = require('axios');
const crypto = require('crypto');

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
    console.log(repo);
  }
  // @TODO iterate `repos` and pass item as payload to `getReleases` CF 
  const releases = await axios.get(`${GITHUB_API_ARI}/getReleases`);
  for (const release of releases.data) {
    await createNode({
      children: [],
      id: release.id.toString(),
      repo: 'drupal-console',
      url: release.url,
      assets_url: release.assets_url,
      upload_url: release.upload_url,
      html_url: release.html_url,
      node_id: release.node_id,
      tag_name: release.tag_name,
      target_commitish: release.target_commitish,
      name: release.name,
      draft: release.draft,
      author: release.author,
      prerelease: release.prerelease,
      created_at: release.created_at,
      published_at: release.published_at,
      assets: release.assets,
      tarball_url: release.tarball_url,
      zipball_url: release.zipball_url,
      body: release.body,
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

  const contributors = await axios.get(`${GITHUB_API_ARI}/getContributors`);
  for (const contributor of contributors.data) {
    await createNode({
      children: [],
      id: contributor.id.toString(),
      login: contributor.login,
      node_id: contributor.node_id,
      avatar_url: contributor.avatar_url,
      gravatar_id: contributor.gravatar_id,
      url: contributor.url,
      html_url: contributor.html_url,
      followers_url: contributor.followers_url,
      gists_url: contributor.gists_url,
      starred_url: contributor.starred_url,
      subscriptions_url: contributor.subscriptions_url,
      organizations_url: contributor.organizations_url,
      repos_url: contributor.repos_url,
      events_url: contributor.events_url,
      received_events_url: contributor.received_events_url,
      type: contributor.type,
      site_admin: contributor.site_admin,
      contributions: contributor.contributions,
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
  await createNode({
    children: [],
    id: releases.data[0].tag_name,
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
    latest_release: releases.data[0].tag_name,
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

    if (sourceInstanceName===`articles`) {
      const slug = node.frontmatter.path
            // Add slug field
      createNodeField({
        name: `slug`,
        node,
        value: slug
      })
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
          }
        }
      }

      allArticles: allMdx(filter: {fileInfo: {sourceInstanceName: {eq: "articles"}}}) {
        edges {
          node {
            fields {
              slug
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
