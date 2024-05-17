import React from 'react'
import '../styles/viewstyle/stands.css'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Navbar from '../components/Navbar'
import Gradient from '../components/Gradient'
import Carousel from '../components/Carousel'
import EventPageContainer from '../components/EventPageContainer'

const Stands = () => {

    const { carouselStandsImages } = useContext(DataContext)

    return (
        <>
            <main className="standsPage">
                <Navbar />
                <Carousel images={carouselStandsImages}/>
                <Gradient />
            </main>
        </>
  )
}

export default Stands
