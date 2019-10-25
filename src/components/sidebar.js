/* eslint-disable */

import React from "react"
import SidebarItem from "./sidebar-item";
import {Link} from "gatsby";

import _split from "lodash/split";
import _isEqual from "lodash/isEqual";
import { FaChevronRight } from "react-icons/fa";
// @TODO 
// Remove eslint-disable
const Sidebar = ({ items, activePage, language, rtl, toDropDown }) => {
  const activePageItems = _split(activePage, '/');

  return (
    <div className={`docs-sidebar position-relative ${toDropDown?'dropdown':''} float-${rtl ? 'right': 'left'}`}>
      {toDropDown&&
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuDocs" data-flip="true" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </button>}
      <div className={`${toDropDown?'dropdown-menu dropdown-sidebar  ':''} ${rtl?'dropdown-menu-right':'dropdown-menu-left'}`} aria-labelledby="dropdownMenuDocs">
        <aside className={`sidebar sidebar-sticky sidebar-stick-shadow ${rtl && 'rtl'}`}>
          <ul className="nav nav-sidebar nav-sidebar-hero" data-accordion="true">
            {items && (
              items.map(item => {
                const linkItems = _split(item.link, '/');
                const isActive = _isEqual(activePageItems[3], linkItems[0]);
                const link = `/docs/${language}/${item.link}`;

                return (
                  <li key={`${item.link}-li}`} className="nav-item">
                    <Link className={`nav-link ${isActive && 'active'} ${toDropDown?'active':''} font-size-16`} to={link}>
                      {
                        activePage === link || isActive ? <strong>{item.title}</strong> : item.title
                      }
                      {item.items&&item.items.length>0&&<FaChevronRight className="nav-angle" />}
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
      </div>
    </div>
  )
}

export default Sidebar
