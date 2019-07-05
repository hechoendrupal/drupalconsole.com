import React from "react"
import './style.css';
import { Link, useStaticQuery, graphql } from "gatsby"

import Image from "../../layout/image"
import _find from "lodash/find"
import _isEqual from "lodash/isEqual"

const LanguageSwitcher = ({ language, activePage }) => {

  if (!activePage || !language) {
    return (<></>)
  }

  if (activePage.charAt(activePage.length-1) !== '/') {
    activePage = activePage + '/'
  }

  const { allLanguagesYaml } = useStaticQuery(
    graphql`
      query {
        allLanguagesYaml {
          edges {
            node {
              id
              slug
              name
            }
          }
        }
      }
    `
  )

  const defaultLangaugeName = _find(allLanguagesYaml.edges, (item) => {return _isEqual(item.node.id, language)})

  return (
    <div className="container">
      <div className="dropdown float-right">
        {defaultLangaugeName &&
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <Image path={`flags/${defaultLangaugeName.node.slug}.png`} className="rounded-circle w-20px" alt={defaultLangaugeName.node.slug} /> {` ${defaultLangaugeName.node.slug} (${defaultLangaugeName.node.id})`}
          </button>
        }
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {defaultLangaugeName && allLanguagesYaml.edges && allLanguagesYaml.edges.map(item => {

            if (!item) {
              return <></>
            }

            const toPage = activePage.replace(`/${defaultLangaugeName.node.id}/`, `/${item.node.id}/`)

            return (
              <Link key={item.node.id} className="dropdown-item" to={`/${toPage}`}>
                {item.node.name} ({item.node.id})
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher;
