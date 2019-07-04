import React from "react";
import { Link } from "gatsby";

const SidebarItem = ({ item, activePage, language }) => {

  return (
    item.items && (
      item.items.map((item, i) => {
        return (
          <Link key={i} className="nav-link font-size-14" to={`/docs/${language}/${item.link}`}>{item.title}</Link>
        )
      })
    )
  )
}

export default SidebarItem
