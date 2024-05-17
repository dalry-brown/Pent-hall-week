import React from 'react'
import { useContext } from 'react'
import "../styles/componentstyle/search.css"
import { FaSearch } from "react-icons/fa"
import { FaCaretRight } from "react-icons/fa"
import { DataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'

const Search = ({ placeholder, title, navig }) => {

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
                <Link to={navig} style={{textDecoration: "none", color: "red"}}>  
                  <button>{ title }</button>
                </Link>
                  <div className="caretright">
                    <FaCaretRight/>
                  </div>
              </div>
          </aside>
    </div>
  )
}

export default Search
