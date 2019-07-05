import React from "react"
import './style.css';
import { Link, useStaticQuery, graphql } from "gatsby"

import _find from "lodash/find"
import _isEqual from "lodash/isEqual"

const LanguageSwitcher = ({ language }) => {

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
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {defaultLangaugeName.node.slug} ({defaultLangaugeName.node.id})
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {allLanguagesYaml.edges.map(item => {
            return (
              <Link key={item.node.id} className="dropdown-item" to={`/docs/${item.node.id}/`}>
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
