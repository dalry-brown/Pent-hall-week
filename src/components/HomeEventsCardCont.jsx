import React from 'react'
import { useContext } from 'react'
import HomeEventsCard from './HomeEventsCard'
import "../styles/componentstyle/homeEventsCardCont.css"
import { DataContext } from '../context/DataContext'

//items={items.filter(item => ((item.item).toLowerCase().includes(searchItem.toLowerCase())))}

const HomeEventsCardCont = () => {

  const { events, search } = useContext(DataContext)

  const newEvent = events.filter(event => ((event.title).toLowerCase().includes(search.toLowerCase()))).slice(0, 3)

  return (
    <div className="homeEventsCardContainer">
      {
        newEvent.map((event) => (
          <HomeEventsCard
            key={event.id} event={event} />
        ))
      }
    </div>
  )
}

export default HomeEventsCardCont
