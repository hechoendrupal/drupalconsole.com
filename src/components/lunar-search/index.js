import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import _isEmpty from 'lodash/isEmpty'
import { FaSearch } from "react-icons/fa";
import "./style.css"

const SearchComponent = ({ lang }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [langAvailable, setLangAvailable] = useState(true)

  useEffect(()=>{
    setLangAvailable(window.__LUNR__&&window.__LUNR__[lang])
  },[lang])

  const getSearchResults = string => {
    if (!string || !window.__LUNR__) return []
      if(window.__LUNR__[lang]){
        const results = window.__LUNR__[lang].index.search(string)
        return results.map(({ ref }) => window.__LUNR__[lang].store[ref])
      }
    return []
  }

  const search = (event, setQuery, setResults) => {
    let string = event.target.value
    setQuery(string)
    setResults(getSearchResults(string))
  }

  return langAvailable ? <div className="search-docs">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>
        <input
          className="search-docs__input form-control"
          type="text"
          aria-label="Search"
          value={query}
          onChange={event => search(event, setQuery, setResults)}
          placeholder={"Search"}
        />
      </div>
      {!_isEmpty(results) && <ul className="search-docs__results toc bg-light b-1 px-5 py-3">
        { results.map(page => {
            const slug = page.url.substring(page.url.lastIndexOf('/') + 1)
            return (
            <li
              key={page.url}
              className=""
            >
              <Link className="" to={page.url}>
                {page.title||slug}
              </Link>
            </li>
          )})
        }
      </ul>}
    </div>:null
  
}

export default SearchComponent
