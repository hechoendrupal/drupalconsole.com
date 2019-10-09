import React from "react";
import PropTypes from "prop-types";
import {Link} from 'gatsby';
import './styles.css'
const Sidebar = ({showSidebar, handleShowSidebar}) => {
  return (
    <div className={`sidebar-mobile ${showSidebar?'active':''}`}>
      <div className="pb-3x">
        <button className="close-menu" onClick={handleShowSidebar}>
          <span className="">Close</span>
          <svg
          className=""
            viewBox="136.09100341796875 58.95399856567383 134.19000244140625 134.19000244140625"
            xmlns="http://www.w3.org/2000/svg"
            fill="#333"
          >
            <path d="M 136.091 61.084 L 268.151 193.144 L 270.281 190.588 L 138.647 58.954 L 136.091 61.084 Z"></path>
            <path d="M 137.967 59.939"></path>
            <path
              d="M 136.091 191.014 L 268.151 58.954 L 270.281 61.51 L 138.647 193.144 L 136.091 191.014 Z"
              transform="matrix(-1, 0, 0, -1, 406.372006, 252.097996)"
            ></path>
            <path d="M 268.965 191.856"></path>
          </svg>
        </button>
      </div>
      <div className="">
        <div className="">
          
          <nav className="">
            <Link className="" to="/docs">Documentation</Link>
            <Link className="" to="/contributors">Contributors</Link>
            <Link className="" to="/articles">Articles</Link>
            <Link className="" to="/changelog">Changelog</Link>
            <Link className="" to="/support">Support</Link>
          </nav>
          
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  handleShowSidebar: PropTypes.func,
};

export default Sidebar;
