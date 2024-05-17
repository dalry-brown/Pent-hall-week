import React from 'react'
import "../styles/componentstyle/eventpagecard.css"
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const EventsPageCard = ({ event }) => {
    
    const { windowSize } = useContext(DataContext)

    const adjuster = (size) => {        
        switch (true) {
            case (size === 450):
                return 1;
            case (size <= 600):
                return 19;
            default:
                return 13;
        }
    };
    

    console.log(adjuster(windowSize))

  return (
      <div className="eventContainer">
          <div className="nested-event-container">
            <div className="event-image">
                <img src={`${event.img}`} alt="" />
                </div>
                <p className="event-date-big">{event.date}</p>
                <div className="event-number">{event.id}</div>
                <div className="ev-container">
                    <h2 className="ev-title">{event.title}</h2>
                    <p className="event-date-small">{event.date}</p>
                    <div className="ev-about">{event.about.split(" ").slice(0, adjuster(windowSize)).join(" ").concat('...')}</div>
                </div> 
          </div>
      </div>
  )
}

export default EventsPageCard
