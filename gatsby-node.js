const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNode, createNodeField } = actions
  // MDX content
  if (node.internal.type === `Mdx`) {
    // Add slug field
    const slug = getNode(node.parent).relativePath.replace(".md", "").toLowerCase()
    createNodeField({
      name: `slug`,
      node,
      value: slug.startsWith("docs")?slug:`docs/${slug}`
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
          },
        })
      })

      return null
    })
}
