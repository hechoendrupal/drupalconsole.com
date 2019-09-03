import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../layout/layout"

const ChangelogPage = () => {

  const { allChangelog } = useStaticQuery(
    graphql`
      query {
        allChangelog: allMdx(
            filter: {fileInfo: {sourceInstanceName: {eq: "changelog"}}}, 
            sort: {fields: frontmatter___date, order: DESC}
          ) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                path
                redirect
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
            <h1 className="text-center py-5" >Changelog</h1>
            {allChangelog.edges.map( changelog => {
                return(
                  <React.Fragment key={changelog.node.id}>
                    <p>
                      <Link to={changelog.node.frontmatter.path}>
                        <h3>{changelog.node.frontmatter.title}</h3>
                        <p>
                          {changelog.node.excerpt}
                        </p>
                      </Link>
                      
                    </p>
                  </React.Fragment>
                )
            })}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ChangelogPage
