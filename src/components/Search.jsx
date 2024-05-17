import React from 'react'
import { useContext } from 'react'
import "../styles/componentstyle/search.css"
import { FaSearch } from "react-icons/fa"
import { FaCaretRight } from "react-icons/fa"
import { DataContext } from '../context/DataContext'

const Search = ({ placeholder, title }) => {

    const { search, setSearch } = useContext(DataContext)

  return (
      <div className="search-container">
          <aside className="searchandfilter">
              <div className="search">
                  <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                      <label htmlFor="search"><FaSearch/></label>
                      <input
                          type='text'
                          role='searchbox'
                          id='search'
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder={`${placeholder}`}
                      />
                  </form>
              </div>
              <div className="filter">
                    <button>
                      <a href="#">{ title }</a>
                  </button>
                  <div className="caretright">
                    <FaCaretRight/>
                  </div>
              </div>
          </aside>
    </div>
  )
}

export default Search
