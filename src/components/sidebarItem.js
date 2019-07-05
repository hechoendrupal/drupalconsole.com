import React from "react";
import { Link } from "gatsby";

const SidebarItem = ({ item, activePage, language }) => {
  return (
    item.items && (
      item.items.map((item, i) => {
        const link = `docs/${language}/${item.link}`;
        return (
          <Link key={i} className="nav-link font-size-14" to={`/${link}`}>
            {
              activePage === link ? <strong>{item.title}</strong> : item.title
            }
            </Link>
        )
      })
    )
  )
}

export default SidebarItem
