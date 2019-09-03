import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './style.css';

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <div className="navbar-left">
          <button className="navbar-toggler" type="button">☰</button>
          <Link className="navbar-brand" to="/">
            <img className="logo-dark" alt={siteTitle} src="/images/drupal-console-logo.png" />
            <img className="logo-light" alt={siteTitle} src="/images/drupal-console-logo.png" />
          </Link>
        </div>
        <section className="navbar-mobile">
          <nav className="nav nav-navbar ml-auto">
            <Link className="nav-link" to="/docs">Documentation</Link>
            <Link className="nav-link" to="/contributors">Contributors</Link>
            <Link className="nav-link" to="/articles">Articles</Link>
            <Link className="nav-link" to="/changelog">Changelog</Link>
            <Link className="nav-link" to="/support">Support</Link>
          </nav>
        </section>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
