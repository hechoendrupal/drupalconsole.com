import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layout/layout";

const ChangelogTemplate = (props) =>  {
  const node = props.data.mdx
  return (
    <Layout context={props.pageContext}>
      <main className="main-content">
          <div className="container">
            <div className="col-md-1 col-xl-12">
              <section className="row text-center justify-content-center py-4">
              <h1>{node.frontmatter.title}</h1>
              </section>
              <section>
                <MDXProvider>
                  <MDXRenderer>{node.body}</MDXRenderer>
                </MDXProvider>
              </section>
            </div>
          </div>
      </main>
    </Layout>
  )
}

export default ChangelogTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
