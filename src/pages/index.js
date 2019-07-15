import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/layout"
import LanguageCard from "../components/languageCard"

const DocsPage = () => {

  const { allLanguagesYaml } = useStaticQuery(
    graphql`
      query {
        allLanguagesYaml(sort: {order: ASC, fields: id}) {
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
                <h1 className="text-center" >Documentation</h1>
                <LanguageCard data={allLanguagesYaml.edges}/>
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default DocsPage
