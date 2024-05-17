import React from 'react'
import "../styles/componentstyle/eventpagecard.css"

const EventsPageCard = ({event}) => {

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
                    <div className="ev-about">{((event.about).length > 10) ? event.about.split(" ").slice(0, 13).join(" ").concat('...') : 'girl'}</div>
                </div> 
          </div>
      </div>
  )
}

export default EventsPageCard
