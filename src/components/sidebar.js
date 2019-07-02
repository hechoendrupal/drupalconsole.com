/* eslint-disable */

import React from "react"

import SidebarSubItem from "./sidebarSubItem";
import {Link} from "gatsby";

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
          {items && (
            items.map(item => {
              return (
                <li className="nav-item">
                  <Link className="nav-link" to={`/docs/en/${item.link}`}>{item.title}<i className="nav-angle"></i></Link>
                  {item.items && (
                    <div className="nav">
                        <SidebarSubItem
                          item={item}
                        />
                    </div>
                  )}
                </li>
              )
            })
          )}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
