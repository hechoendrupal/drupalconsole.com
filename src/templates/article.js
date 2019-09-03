import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../layout/layout";

const ArticleTemplate = (props) =>  {
  const post = props.data.mdx
  return (
    <Layout context={props.pageContext}>

      <main className="main-content">
          <div className="container">
            <div className="col-md-1 col-xl-12">
              <section className="row text-center justify-content-center py-4">
              <h1>{post.frontmatter.title}</h1>
              </section>
              <section>
                <MDXProvider>
                  <MDXRenderer>{post.code.body}</MDXRenderer>
                </MDXProvider>
              </section>
            </div>
          </div>
      </main>
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      frontmatter {
        title
      }
    }
  }
`
