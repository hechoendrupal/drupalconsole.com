import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/layout"
import LanguageCard from "../components/language-card"

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
          <div className="col-md-12 col-xl-12">
            <h1 className="text-center py-5" >Documentation</h1>
            <LanguageCard data={allLanguagesYaml.edges}/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default DocsPage
