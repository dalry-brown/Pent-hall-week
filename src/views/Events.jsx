import React from 'react'
import '../styles/viewstyle/events.css'
import Carousel from '../components/Carousel'
import fire1 from '../assets/images/firework.jpg'
import fire2 from '../assets/images/firework2.jpg'
import fire3 from '../assets/images/mainfirework.jpg'

const Events = () => {

    const images = [
        fire1,
        fire2,
        fire3
    ]

  return (
      <>
        <h1 className='eventheading'>
        Events Page
        </h1>
        <Carousel images={images} />
      </>
  )
}

export default Events
