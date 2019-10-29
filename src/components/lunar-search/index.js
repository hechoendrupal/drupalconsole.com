import React, { useState, useEffect, useCallback, useRef } from "react"
import { Link, navigate } from "gatsby"
import _isEmpty from 'lodash/isEmpty'
import { FaSearch } from "react-icons/fa";
import "./style.css"

const SearchComponent = ({ lang }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [langAvailable, setLangAvailable] = useState(true)
  const [activeResult, setActiveResult] = useState(Number(0))
  const resultsRef = useRef(null);

  const upHandler = useCallback(({ key }) => {
    if (key === 'ArrowUp') {
      setActiveResult((activeResult-1<0) ? 0 : activeResult - 1)
    }
    if (key === 'ArrowDown') {
      setActiveResult((activeResult+1 > results.length-1) ? activeResult : activeResult + 1)
    }
    if (key === 'Enter'&&results[activeResult]) {
      navigate(results[activeResult].url)
    }
  },[activeResult, results]);

  const handleScrollResults = useCallback(() => {
    const container = resultsRef.current;
    if (!container) return null;
    if(container.scrollHeight>300){
      const childs = container.childNodes;
      if(childs[activeResult].offsetTop>300){
        container.scrollTop = childs[activeResult].offsetTop;
      }
      if(childs[activeResult].offsetTop<300){
        container.scrollTop = childs[activeResult].offsetTop + childs[activeResult].height;
      }
    }
  },[activeResult, resultsRef]); 

  useEffect(()=>{
    handleScrollResults()
    setLangAvailable(window.__LUNR__&&window.__LUNR__[lang]);
    if(window){
      window.addEventListener('keyup', upHandler);
    }
    // Remove event listeners on cleanup
    return () => {
      if(window){
        window.removeEventListener('keyup', upHandler);
      }
    };
  },[lang, upHandler, handleScrollResults])

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
      {!_isEmpty(results) && <ul className="search-docs__results toc bg-light b-1" ref={resultsRef}>
        { results.map((page, index) => {
            const slug = page.url.substring(page.url.lastIndexOf('/') + 1)
            return (
            <li
              key={page.url}
              className={`px-5 py-1 ${activeResult===index?'active-result':''}`}
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
