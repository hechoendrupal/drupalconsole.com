
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../../components/header';
import "./style.css"
// @TODO add render
// - Header
// - Footer 
const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <>
    <Header siteTitle={site.siteMetadata.title}/>
      {children}
      <footer className="container">
        <center>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          <hr/>
        </center>
      </footer>
    </>
  )
}

export default Layout
