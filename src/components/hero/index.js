import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from "gatsby";
import './style.css';

const Hero = props => {
  return (
    <header className={`header text-center ${props.innerSize} hero`} >
      <div className="container-sm">
        {props.children}
      </div>
    </header>
  );
};

Hero.propTypes = {
  
};

export default Hero;