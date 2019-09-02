import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from "gatsby";
import './style.css';

const index = props => {
  return (
    <header className="header text-center py-9 hero" >
      <div className="container-sm">
        <h1>Drupal Console</h1>
        <p className="lead">The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.</p>
        <br />
        <div>
          <Link to="/docs" className="btn btn-md btn-primary mr-3" href="#">Download <i className="fas fa-download"></i></Link>
        </div>
      </div>
    </header>
  );
};

index.propTypes = {
  
};

export default index;