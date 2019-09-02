
import React from "react"
import "./style.css"
// @TODO add render
// - Header
// - Footer 
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer className="container">
        <center>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <hr/>
        </center>
      </footer>
    </>
  )
}

export default Layout
