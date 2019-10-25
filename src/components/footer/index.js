import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from "gatsby"
import { FaLifeRing, FaGithub, FaTwitter } from "react-icons/fa";
import './style.css';

const footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className=" row my-5 justify-content-center">
            <div className="col-3 justify-content-center">
              <Link to="/support"><FaLifeRing className="footer__social"/></Link>
            </div>
            <div className="col-3 justify-content-center">
              <a href="https://github.com/hechoendrupal/DrupalConsole" target="_blank" rel="noopener noreferrer"><FaGithub className="footer__social"/></a>
            </div>
            <div className="col-3 justify-content-center">
              <a href="https://twitter.com/drupalconsole" target="_blank" rel="noopener noreferrer"><FaTwitter className="footer__social"/></a>
            </div>
          </div>
        </div>
        <div className="row gap-y align-items-center">
          <div className="col-md-7">
            <div className="nav justify-content-center justify-content-md-start">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/docs">Documentation</Link>
              <Link className="nav-link" to="/contributors">Contributors</Link>
              <Link className="nav-link" to="/articles">Articles</Link>
              <Link className="nav-link" to="/changelog">Changelog</Link>
              <Link className="nav-link" to="/support">Support</Link>
            </div>
          </div>
          <div className="col-md-5 text-md-right">
          © {new Date().getFullYear()}, Made by <a className="text-primary" href="https://www.weknowinc.com" target="_blank" rel="noopener noreferrer">WeKnow</a> using <a href="http://gatsbyjs.org" target="_blank" rel="noopener noreferrer" className="text-primary">GatsbyJS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

footer.propTypes = {
  
};

export default footer;