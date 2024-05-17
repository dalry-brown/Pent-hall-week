import React, { useEffect, useState, useContext } from 'react'
import "../styles/componentstyle/navbar.css"
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Navbar = () => {

  const { backgroundColor, handleScroll } = useContext(DataContext)

  return (
    <div className="nav-container" style={{backgroundColor: backgroundColor}}>
          <nav className='nav'>
              <div className="logo">Pent Hall Week</div>
              <ul className="nav-items">
                  <Link style={{textDecoration: "none", color: "white"}} to="/events"><li className="nav-list">Events</li></Link>
                  <Link style={{textDecoration: "none", color: "white"}} to="/stands"><li className="nav-list">Stands</li></Link>
              </ul>
          </nav>
    </div>
  )
}

export default Navbar
