import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layout/layout";
import ChangelogItem from '../components/changelog-archive-item';

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
              body
              frontmatter {
                title
                path
                redirect
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <main className="main-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-8">
              <h1 className="py-5 text-center">Changelog</h1>
              {allChangelog.edges.map( changelog => {
                return(
                  <ChangelogItem
                    key={changelog.node.id}
                    title={changelog.node.frontmatter.title}
                    excerpt={changelog.node.body}
                    date={changelog.node.frontmatter.date}
                    path={changelog.node.frontmatter.path}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ChangelogPage
