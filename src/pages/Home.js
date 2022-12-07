import React from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import FeaturedFlights from '../components/FeaturedFlights'
import About from '../components/About'
import Contact from '../components/Contact'

const home = () => {
  return (
    <>
    <section id='home'>
      <Hero id="home">
      <Banner title="Fly with us" subtitle="Book your flight today">
        <Link to="/flights" className='btn-primary'>
          Our flights
        </Link>
      </Banner>
    </Hero>
    </section>
    <About />
    <FeaturedFlights />
    <Services/>
    <Contact/>
    </>
  )
}

export default home;