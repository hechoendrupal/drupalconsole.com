const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNode, createNodeField } = actions
  // MDX content
  if (node.internal.type === `Mdx`) {
    // Add slug field
    const slug = getNode(node.parent).relativePath.replace("/README.md", "").replace(".md", "").toLowerCase()
    createNodeField({
      name: `slug`,
      node,
      value: slug.startsWith("docs")?slug:`docs/${slug}`
    })

    // Add language field
    createNodeField({
      name: `language`,
      node,
      value: slug.indexOf('/') > 0 ? slug.substring(0, slug.indexOf('/')) : slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDocs: allMdx {
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

      allLanguagesYaml {
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

      // Create languag pages.
      const languages = result.data.allLanguagesYaml.edges
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
              command: command,
              language: language
            },
          })
        })
      })

      return null
    })
}
