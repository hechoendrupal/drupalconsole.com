import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../layout/layout"
import Sidebar from "../components/sidebar"
import LanguageSwitcher from "../components/languageSwitcher"
import _includes from "lodash/includes"

const DocTemplate = (props) =>  {
  const post = props.data.mdx
  const items = props.data.allNavigationItems.edges[0] ? props.data.allNavigationItems.edges[0].node.items : []
  const rtlLanguages = ["fa-ir"];
  const language = props.pageContext.language;

  return (
    <Layout>
      <main className="main-content">
        <div className="container">
          <div className="row">
            <LanguageSwitcher
              language={props.pageContext.language}
              activePage={props.pageContext.slug}
            />
          </div>
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <Sidebar
                  items={items}
                  language={props.pageContext.language}
                  activePage={props.pageContext.slug}
                />
            </div>
            <div className={`col-md-7 col-xl-8 ml-md-auto py-8 ${_includes(rtlLanguages, language) && 'rtl'}`}>
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
