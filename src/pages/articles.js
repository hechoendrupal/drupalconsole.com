import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../layout/layout"

const ArticlesPage = () => {

  const { allArticles } = useStaticQuery(
    graphql`
      query {
        allArticles: allMdx(
            filter: {fileInfo: {sourceInstanceName: {eq: "articles"}}}, 
            sort: {fields: frontmatter___date, order: DESC}
          ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
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
            <h1 className="text-center py-5" >Articles</h1>
            {allArticles.edges.map( article => {
                return(
                  <React.Fragment key={article.node.id}>
                    <p>
                      <Link to={article.node.fields.slug}>
                        {article.node.frontmatter.title}
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

export default ArticlesPage
