import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import TemplateLayout from "../layout/templateLayout"

const DocTemplate = (props) =>  {
  const post = props.data.mdx
  const items = props.data.allNavigationItems.edges[0] ? props.data.allNavigationItems.edges[0].node.items : []

  return (
    <TemplateLayout items={items} context={props.pageContext}>
        <MDXProvider>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </MDXProvider>
    </TemplateLayout>
  )
}

export default DocTemplate

export const pageQuery = graphql`
  query($slug: String!, $language: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
    }

    allNavigationItems: allDataJson(filter: {language: {eq: $language}, type: {eq: "navigation"}}) {
      edges {
        node {
          items {
            link
            title
            items {
              link
              title
            }
          }
        }
      }
    }
  }
`
