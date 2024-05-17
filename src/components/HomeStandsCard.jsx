import React from 'react'
import "../styles/componentstyle/homeEventsCard.css"
import bikini from "../assets/images/bikini.jpg"
import { Link } from 'react-router-dom'
import { FaMapMarker } from 'react-icons/fa'

const HomeStandsCard = ({stand}) => {
  return (
        <div className="homeEventCard">
            <div className="homeEventRight">
            <div className="eventImageContainer"><img src={stand.img} alt="" /></div>
            <div className="eventInfo">
            <Link style={{textDecoration: "none", color: "white"}} to="/events"><h2>{stand.title }</h2></Link>
            <div className="locationAndTime">
                <div className="locationsymbol">
                    <FaMapMarker />
                </div>
                <div className="period">{stand.location} | {stand.time}</div>
            </div>
            </div>
      </div>
      <Link style={{textDecoration: "none"}} to="/events">
          <button className="homeEventLeft">
              More Info
        </button>
        </Link>
        </div>
  )
}

export default HomeStandsCard
