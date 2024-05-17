import React from 'react'
import "../styles/componentstyle/eventpagecontainer.css"
import EventPageCard from "../components/EventsPageCard"
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const EventPageContainer = () => {

    const { events } = useContext(DataContext)

    return (
      <div className="event-body">
        {
                events.map((event) => (
                 <EventPageCard key={event.id} event={event}/>
             ))   
        }
      </div>
  )
}

export default EventPageContainer
