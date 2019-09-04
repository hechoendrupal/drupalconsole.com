import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import slugify from "slugify";
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
          <div className="row">
            <div className="col-md-9 col-xl-9">
              <h1 className="py-5">Changelog</h1>
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
            <div className="col-md-3 col-xl-3">
              <aside className="sidebar sidebar-sticky pr-md-4" >
                <ul className="nav nav-sidebar nav-sidebar-pill">
                  {allChangelog.edges.map( changelog => {
                    const slug = slugify(changelog.node.frontmatter.title);
                    return(
                      <li className="nav-item" key={changelog.node.id}>
                        <a className="nav-link" href={`#${slug}`}>{changelog.node.frontmatter.title}</a>
                      </li>
                    )
                  })}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ChangelogPage
