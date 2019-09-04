
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../../components/header';
import Footer from '../../components/footer';
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
      <Footer />
    </>
  )
}

export default Layout
