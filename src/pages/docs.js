import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import LanguageCard from "../components/languageCard"

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
              authors {
                id
                name
                user_drupal
                twitter
                facebook
                github
                github_avatar
                user_picture
                website
              }
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
                <LanguageCard data={allLanguagesYaml.edges}/>
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default DocsPage
