import React, { useEffect } from "react";
import { createContext, useState } from "react";
import pent8 from '../assets/images/pent8.jpg'
import bikini from '../assets/images/bikini.jpg'
import fire3 from '../assets/images/mainfirework.jpg'
import carouselphoto1 from '../assets/images/carouselphoto1.jpg'
import { eventData } from '../data/db'
import khebab from "../assets/images/khebab.jpg"
import sobolo from "../assets/images/sobolo.jpg"
import kelewele from "../assets/images/kelewele.jpg"
import sally from "../assets/images/sally.jpg"

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [events, setEvents] = useState([])

    const [stands, setStands] = useState([])
    

    useEffect(() => {
        setEvents(eventData.events)
        setStands(eventData.stands)
    }, [])

    const carouselHomeImages = [
        carouselphoto1,
        bikini,
        pent8
    ]

    const carouselStandsImages = [
        khebab,
        sobolo,
        kelewele,
        sally
    ]

    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.5)")
    
    const handleScroll = () => {
        const scrollPosition = window.scrollY
        if (scrollPosition > 50) {
          setBackgroundColor("#020015")
        } else {
          setBackgroundColor("rgba(0, 0, 0, 0.5)")
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
      }, [])

    const [search, setSearch] = useState("")

    return (
        <DataContext.Provider value={{ carouselHomeImages, carouselStandsImages, search, setSearch, stands, events, backgroundColor, setBackgroundColor, handleScroll }}>
            {children}
        </DataContext.Provider>
    )
}