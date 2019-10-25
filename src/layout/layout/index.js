
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar-mobile';
import SEO from '../../components/seo';
import "./style.css"
// @TODO add render
// - Header
// - Footer 
const Layout = ({ children, title }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  }

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
      <SEO title={title} />
      <Sidebar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} />
      <Header siteTitle={site.siteMetadata.title} handleShowSidebar={handleShowSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
