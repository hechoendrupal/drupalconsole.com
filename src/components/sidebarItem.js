import React from "react";
import { Link } from "gatsby";

const SidebarItem = ({ item, activePage }) => {

  return (
    item.items && (
      item.items.map((item, i) => {
        return (
          <Link key={i} className="nav-link" to={`/docs/en/${item.link}`}>{item.title}</Link>
        )
      })
    )
  )
}

export default SidebarItem
