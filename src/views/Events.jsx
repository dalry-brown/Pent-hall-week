import React from 'react'
import '../styles/viewstyle/events.css'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Navbar from '../components/Navbar'
import Gradient from '../components/Gradient'
import Carousel from '../components/Carousel'
import EventPageContainer from '../components/EventPageContainer'

const Events = () => {

  const { carouselStandsImages } = useContext(DataContext)

  return (
      <>
        <main className="eventsPage">
            <Navbar />
            <Carousel images={carouselStandsImages}/>
            <Gradient />
            <EventPageContainer />
        </main>
      </>
  )
}

export default Events
