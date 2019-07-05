import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Table from "../components/table"
import LanguageSwitcher from "../components/languageSwitcher"

import _isEmpty from "lodash/isEmpty"

const CommandTemplate = (props) =>  {
  const command = props.pageContext.command
  const items = props.data.allNavigationItems.edges[0] ? props.data.allNavigationItems.edges[0].node.items : []

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
              <h1>{command.name}</h1>
              <p className="lead">{command.description}</p>
              <React.Fragment>
                <h4>{command.messages.usage}:</h4> 
                <pre>
                  <code>
                    {`drupal ${command.name} ${!_isEmpty(command.arguments) ? '[arguments]' : ''} ${!_isEmpty(command.options) ? '[options]' : ''}`}
                    {command.aliases && (
                      command.aliases.map((alias, i) => {
                        return (
                          <React.Fragment key={i}>
                            {`\n${alias}`}
                          </React.Fragment>
                        )
                      })
                    )}
                  </code>
                </pre>
              </React.Fragment> 
              {!_isEmpty(command.options) && (
                <React.Fragment>
                  <h3>{command.messages.options}</h3> 
                  <Table messages={command.messages} data={command.options} isOption={true}/>
                </React.Fragment>
              )}
              {!_isEmpty(command.arguments) && (
                <React.Fragment>
                  <h3>{command.messages.arguments}</h3> 
                  <Table messages={command.messages} data={command.arguments} isOption={false}/>
                </React.Fragment>
              )}
              {!_isEmpty(command.examples) && (
                <React.Fragment>
                  <h3>{command.messages.examples}</h3> 
                  {command.examples && (
                    command.examples.map((example, i) => {
                      return (
                        <React.Fragment key={i}>
                          <p className="lead">{example.description}</p>
                          <pre>
                            <code>
                              {example.execution}
                            </code>
                          </pre>
                        </React.Fragment>
                      ) 
                    })
                  )}
                </React.Fragment>
              )}
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
