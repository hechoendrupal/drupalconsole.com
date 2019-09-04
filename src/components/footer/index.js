import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from "gatsby"
import './style.css';

const footer = props => {
  return (
    <footer class="footer">
      <div class="container">
        <div className="row justify-content-center">
          <div className=" row my-5 justify-content-center">
            <div className="col-3 justify-content-center">
              <Link to="/support"><i class="footer__social fab fa-github"></i></Link>
            </div>
            <div className="col-3 justify-content-center">
              <a href="https://github.com/hechoendrupal/DrupalConsole"><i class="footer__social far fa-life-ring"></i></a>
            </div>
            <div className="col-3 justify-content-center">
              <a href="https://twitter.com/drupalconsole"><i class="footer__social fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div class="row gap-y align-items-center">
          <div class="col-md-6">
            <div class="nav justify-content-center justify-content-md-start">
              <Link className="nav-link" to="/docs">Documentation</Link>
              <Link className="nav-link" to="/contributors">Contributors</Link>
              <Link className="nav-link" to="/articles">Articles</Link>
              <Link className="nav-link" to="/changelog">Changelog</Link>
              <Link className="nav-link" to="/support">Support</Link>
            </div>
          </div>
          <div class="col-md-6 text-md-right">
          © {new Date().getFullYear()}, Build by <a href="https://www.weknowinc.com">WeKnow</a> using <a href="http://gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

footer.propTypes = {
  
};

export default footer;