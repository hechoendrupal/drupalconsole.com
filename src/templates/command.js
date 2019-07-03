import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"

const CommandTemplate = (props) =>  {
  const command = props.pageContext.command
  const items = props.data.allNavigationItems.edges[0].node.items
  console.log(command)
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
              <h1>{command.name}</h1>
              <small>{command.description}</small>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default CommandTemplate

export const pageQuery = graphql`
  query($language: String!) {
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
