/* eslint-disable */

import React from "react"
import SidebarItem from "./sidebarItem";
import {Link} from "gatsby";

import _split from "lodash/split";
import _isEqual from "lodash/isEqual";

// @TODO 
// Remove eslint-disable
const Sidebar = ({ items, activePage, language, rtl }) => {
  const activePageItems = _split(activePage, '/');

  return (
    <>
      <aside className={`sidebar sidebar-sticky sidebar-stick-shadow pr-md-5 br-1 ${rtl && 'rtl'}`}>
        <ul className="nav nav-sidebar nav-sidebar-hero" data-accordion="true">
          {items && (
            items.map(item => {
              const linkItems = _split(item.link, '/');
              const isActive = _isEqual(activePageItems[2], linkItems[0]);
              const link = `docs/${language}/${item.link}`;
              return (
                <li key={`${item.link}-li}`} className="nav-item">
                  <Link className={`nav-link ${isActive && 'active'} font-size-16`} to={`/${link}`}>
                    {
                      activePage === link ? <strong>{item.title}</strong> : item.title
                    }
                    <i className="nav-angle"></i>
                  </Link>
                  {item.items && (
                    <div key={`${item.link}-div-item}`} className="nav">
                        <SidebarItem
                          item={item}
                          activePage={activePage}
                          language={language}
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
