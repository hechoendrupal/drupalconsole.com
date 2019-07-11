import React, { useState } from "react"
import { Link } from 'gatsby'

const getSearchResults = string => {
  if (!string || !window.__LUNR__) return []
  console.log('getSearchResults')
  console.log(window.__LUNR__)
  const results = window.__LUNR__.en.index.search(string)
  console.log(results)
  return results.map(({ ref }) => window.__LUNR__.store[ref])
}

const search = (event, setQuery, setResults) => {
  let string = event.target.value

  console.log('lunr')
  console.log(string)
  setQuery(string)
  setResults(getSearchResults(string))
}

const SearchComponent = (props) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  return (
    <div>
      <input className='search__input'
        type='text' 
        value={query} 
        onChange={(event) => search(event, setQuery, setResults)} 
        placeholder={'Search'}
      />
      <ul className='search__list'>
        {results && results.map((page) => (
        <li key={page.url}>
          <Link className='search__list_white search__list_non-decoration'
            to={page.url}>
            {page.url}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchComponent;
