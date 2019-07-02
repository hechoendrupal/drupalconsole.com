import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { language } from "gray-matter";

const DocsPage = () => {

  const { allLanguagesYaml } = useStaticQuery(
    graphql`
      query {
        allLanguagesYaml {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <main className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-xl-12">
                <h1>Documentation</h1>
                <ul>
                  {allLanguagesYaml.edges.map(item => {
                    const language = item.node;
                    return (
                      <li>
                        <Link to={`/docs/${language.id}/readme`}>{language.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default DocsPage
