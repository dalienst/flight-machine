import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import FeaturedFlights from '../components/FeaturedFlights'

const home = () => {
  return (
    <>
    <Hero>
      <Banner title="Fly with us" subtitle="Book your flight today">
        <Link to="/flights" className='btn-primary'>
          Our flights
        </Link>
      </Banner>
    </Hero>
    <Services id="services"/>
    <FeaturedFlights />
    </>
  )
}

export default home;