import React from "react"
import { graphql } from "gatsby"

import Commands from "../components/commands"
import TemplateLayout from "../layout/templateLayout"

const CommandsTemplate = (props) =>  {
  const commands = props.data.allCommands.edges[0] ? props.data.allCommands.edges[0].node.commands : []
  const items = props.data.allNavigationItems.edges[0] ? props.data.allNavigationItems.edges[0].node.items : []
  const namespaces = props.data.allCommands.edges[0] ? props.data.allCommands.edges[0].node.namespaces : []

  return (
    <TemplateLayout items={items} context={props.pageContext} addRTL>
        <h1>Available Commands</h1>
        <Commands data={commands} namespaces={namespaces} language={props.pageContext.language}/>
    </TemplateLayout>
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
            messages {
              usage
              examples
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