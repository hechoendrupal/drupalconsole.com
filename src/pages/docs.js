import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const DocsPage = () => {

  const { allLanguagesYaml } = useStaticQuery(
    graphql`
      query {
        allLanguagesYaml {
          edges {
            node {
              id
              slug
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
              <div className="col-md-12 col-xl-12">
                <h1>Documentation</h1>
                <ul>
                  {allLanguagesYaml.edges.map(item => {
                    return (
                      <li key={item.node.id}>
                        <Link to={`/docs/${item.node.id}/readme`}>
                          {item.node.slug} | {item.node.name}
                        </Link>
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
