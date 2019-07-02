import React from "react";
import { Link } from "gatsby";

const SidebarSubItem = ({ item, activePage }) => {
  return (
    item.items && (
        <ul id="manual-guide-toc-child" className="manual-guide-toc child">
          {item.items.map(item => {
            return (
              <li key={item.link} id={item.link}>
                <Link to={`/docs/en/${item.link}`}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
    )
  )
}

export default SidebarSubItem
