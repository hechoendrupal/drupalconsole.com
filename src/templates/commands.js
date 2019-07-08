import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Commands from "../components/commands"
import LanguageSwitcher from "../components/languageSwitcher"

const CommandsTemplate = (props) =>  {
  const commands = props.data.allCommands.edges[0] ? props.data.allCommands.edges[0].node.commands : []
  const items = props.data.allNavigationItems.edges[0] ? props.data.allNavigationItems.edges[0].node.items : []
  const namespaces = props.data.allCommands.edges[0] ? props.data.allCommands.edges[0].node.namespaces : []

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
            <div className="col-md-7 col-xl-8 ml-md-auto py-8">
              <h1>Available Commands</h1>
              <Commands data={commands} namespaces={namespaces} language={props.pageContext.language}/>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default CommandsTemplate

export const pageQuery = graphql`
  query ($language: String!) {
    allCommands: allDataJson(filter: {language: {eq: $language}, type: {eq: "commands"}}) {
      edges {
        node {
          commands {
            name
            description
            dashed
            examples {
              execution
            }
          }
          namespaces {
            name
          }
        }
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