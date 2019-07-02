import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const items = [
  {
    link: "what-is-the-drupal-console",
    title: "What is the Drupal Console?",
    items:  [
      {
        link: "why-should-you-care-about",
        title: "Why should you care about?",
      },
      {
        link: "how-does-drupal-console-help",
        title: "How does Drupal Console help?",
      },
      {
        link: "where-do-i-find-the-project",
        title: "Where do I find the project?"
      }
    ]
  },
  {
    link: "project",
    title: "Getting the project",
    ittems: [
      {
        link: "composer",
        title: "Using Composer",
      },
      {
        link: "launcher",
        title: "Global executable aka Launcher",
      },
      {
        link: "windows",
        title: "Installing on Windows",
      },
    ]
  }
];

const Doc = (props) =>  {
  const post = props.data.mdx
  return (
    <Layout>
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <Sidebar
                  items={items}
                  activePage={props.pageContext.slug}
                />
            </div>
            <div className="col-md-7 col-xl-8 ml-md-auto py-8">
              <MDXProvider>
                <MDXRenderer>{post.code.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Doc


export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
    }
  }
`