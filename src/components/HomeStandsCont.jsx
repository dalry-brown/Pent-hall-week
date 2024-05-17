import React from 'react'
import { useContext } from 'react'
import HomeStandsCard from './HomeStandsCard'
import "../styles/componentstyle/homeEventsCardCont.css"
import { DataContext } from '../context/DataContext'

const HomeStandsCont = () => {

  const { stands, search } = useContext(DataContext)
  const newStand = stands.filter(stand => ((stand.title).toLowerCase().includes(search.toLowerCase())))


  return (
    <div className="homeEventsCardContainer">
      {
        newStand.map((stand) => (
          <HomeStandsCard
            key={stand.id} stand={stand} />
        ))
      }
    </div>
  )
}

export default HomeStandsCont