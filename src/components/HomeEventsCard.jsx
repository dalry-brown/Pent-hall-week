import React from 'react'
import "../styles/componentstyle/homeEventsCard.css"
import bikini from "../assets/images/bikini.jpg"
import { Link } from 'react-router-dom'
import { FaMapMarker } from 'react-icons/fa'

const HomeEventsCard = ({event}) => {
  return (
        <div className="homeEventCard">
            <div className="homeEventRight">
        <p className="eventBigDate">{event.date.substring(0,3)}<br /> { event.date.substring(4,12)}<br /> {event.date.substring(12,17)}</p>
            <div className="eventImageContainer"><img src={event.img} alt="" /></div>
            <div className="eventInfo">
            <Link style={{textDecoration: "none", color: "white"}} to="/events"><h2>{event.title }</h2></Link>
          <p className="eventPhoneDate">{ event.date }</p>
            <div className="locationAndTime">
                <div className="locationsymbol">
                    <FaMapMarker />
                </div>
                <div className="period">{event.location} | {event.time}</div>
            </div>
            </div>
      </div>
      <Link style={{textDecoration: "none", color: "white"}} to="/events">
          <button className="homeEventLeft">
              More Info
        </button>
        </Link>
        </div>
  )
}

export default HomeEventsCard


