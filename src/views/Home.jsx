import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import '../styles/viewstyle/home.css'
import Countdown from '../components/Countdown'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Gradient from '../components/Gradient'
import Footer from '../components/Footer'
import Search from '../components/Search'
import HomeEventsCardCont from '../components/HomeEventsCardCont'
import HomeStandsCont from '../components/HomeStandsCont'

const Home = () => {
    const { carouselHomeImages } = useContext(DataContext)
    
  return (
    <main className="homepage">
      <Navbar />
      <Carousel images={carouselHomeImages} />
      <Gradient />
      <Search placeholder="Search Events" title={'All Events'} navig="/events"  />
      <HomeEventsCardCont />
      <Countdown />
      <Search placeholder="Search Stands" title={'All Stands'}  navig="/stands" />
      <HomeStandsCont/>
      <Footer />
    </main>
  )
}

export default Home
