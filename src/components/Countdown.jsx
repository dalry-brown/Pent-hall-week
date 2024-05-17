import React, { useEffect } from 'react'
import "../styles/componentstyle/countdown.css"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'

let totalSeconds = 0;

const countdownfunction = (pentDate) => {
    const currentDate = new Date()
    const desinationDate = new Date(pentDate)
    totalSeconds = (desinationDate - currentDate) / 1000

    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor((totalSeconds / 60) % 60)
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const days = Math.floor(totalSeconds / 3600 /24)

    const dateData = { days, hours, minutes, seconds }
    return dateData
}


const Countdown = () => {
    const pentDate = "19 May, 2024"
    const [timeLeft, setTimeLeft] = useState(countdownfunction(pentDate))
    
    useEffect(() => {
        const intervalId = setInterval(() => {            
            setTimeLeft(countdownfunction(pentDate))
        }, 1000)

        if (totalSeconds <= 0) {
            clearInterval(intervalId); 
            setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            return;
        }

        return () => clearInterval(intervalId)
    }, [])


  return (
    <div className="countdown-container">
          <h2>Starts in...</h2>
          <div className="count-container">
              <div className="count">
                  <p className="count-number">{ timeLeft.days }</p>
                  <p className="count-label">Days</p>
              </div>
              <div className="count">
                  <p className="count-number">{ timeLeft.hours }</p>
                  <p className="count-label">Hours</p>
              </div>
              <div className="count">
                  <p className="count-number">{ timeLeft.minutes }</p>
                  <p className="count-label">Minutes</p>
              </div>
              <div className="count">
                  <p className="count-number">{ timeLeft.seconds }</p>
                  <p className="count-label">Seconds</p>
              </div>
          </div>
          <div className="count-location">
              <FaMapMarkerAlt />
              <p>University of Ghana, Pent Hostel</p>
          </div>
    </div>
  )
}

export default Countdown
