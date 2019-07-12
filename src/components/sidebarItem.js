import React from "react";
import { Link } from "gatsby";

const SidebarItem = ({ item, activePage, language }) => {
  return (
    item.items && (
      item.items.map((item, i) => {
        // const link = `docs/${language}/${item.link}`
        const link = `${language}/${item.link}`
        const isActive = (activePage === link)
        return (
          //<Link className={`nav-link ${isActive && 'active'} font-size-16`} to={`/${link}`}>
          <Link key={i} className={`nav-link ${isActive ? 'active' : ''} font-size-14`} to={`${link}`}>
            {item.title}
            </Link>
        )
      })
    )
  )
}

export default SidebarItem
