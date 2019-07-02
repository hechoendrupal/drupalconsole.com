/* eslint-disable */

import React from "react"

// @TODO 
// Generate markup ul > li > a from items
// Set active class from activePage
// Remove eslint-disable
// Add useEffect and update state and expand / collapse elements
const Sidebar = ({ items, activePage }) => {
  return (
    <>

      <aside className="sidebar sidebar-sticky sidebar-stick-shadow pr-md-5 br-1">
        <ul className="nav nav-sidebar nav-sidebar-hero" data-accordion="true">
          <li className="nav-item">
            <a className="nav-link" href="#">Getting started <i className="nav-angle"></i></a>
            <div className="nav">
              <a className="nav-link" href="kb-introduction.html">Introduction</a>
              <a className="nav-link" href="kb-contents.html">Contents</a>
              <a className="nav-link" href="kb-basic-starter.html">Basic starter</a>
              <a className="nav-link" href="kb-expert-starter.html">Expert starter</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Content <i className="nav-angle"></i></a>
            <div className="nav">
              <a className="nav-link" href="typography.html">Typography</a>
              <a className="nav-link" href="code.html">Code</a>
              <a className="nav-link" href="icon.html">Icon</a>
              <a className="nav-link" href="image.html">Image</a>
              <a className="nav-link" href="table.html">Table</a>
              <a className="nav-link" href="video.html">Video</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Layout <i className="nav-angle"></i></a>
            <div className="nav">
              <a className="nav-link" href="navbar.html">Navbar</a>
              <a className="nav-link" href="sidebar.html">Sidebar</a>
              <a className="nav-link" href="toc.html">Table of content</a>
              <a className="nav-link" href="utility.html">Utility classes</a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Components <i className="nav-angle"></i></a>
            <div className="nav">
              <a className="nav-link" href="accordion.html">Accordion</a>
              <a className="nav-link active" href="alert.html">Alert</a>
              <a className="nav-link" href="badge.html">Badge</a>
              <a className="nav-link" href="button.html">Button</a>
              <a className="nav-link" href="files.html">Files</a>
              <a className="nav-link" href="form.html">Form</a>
              <a className="nav-link" href="pagination.html">Pagination</a>
              <a className="nav-link" href="palette.html">Palette</a>
              <a className="nav-link" href="progress.html">Progress</a>
              <a className="nav-link" href="scroll.html">Scroll</a>
              <a className="nav-link" href="social.html">Social</a>
              <a className="nav-link" href="steps.html">Steps</a>
              <a className="nav-link" href="tab.html">Tab</a>
            </div>
          </li>

        </ul>

      </aside>
    </>
  )
}

export default Sidebar
