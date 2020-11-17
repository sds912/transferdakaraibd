import React from 'react'
import AboutUS from '../components/AboutUs'
import CarList from '../components/CarList'
import HeaderCarousel from '../components/Carousel'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


export default function Home() {
    return (
        <>
            <HeaderCarousel />
            <AboutUS />
            <CarList />
            <ContactUs />
        </>
    )
}
