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
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
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
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-8">
              <h1 className="text-center py-5" >Articles</h1>
              {allArticles.edges.map( article => {
                  return(
                    <div key={article.node.id} className="mb-4">
                      <Link to={article.node.fields.slug}>
                        <h3>{article.node.frontmatter.title}</h3>
                      </Link>
                      <p className="text-light">{article.node.frontmatter.date}</p>
                      <p className="text">
                        {article.node.excerpt}
                      </p>
                      <Link to={article.node.fields.slug}>Read more</Link>
                      <hr/>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ArticlesPage
