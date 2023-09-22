import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import Testimonials from './Testimonials'
import RestaurantStory from './RestaurantStory'
import "./Home.css";

function Home() {
  return (
    <div className='home-container' data-testid="home-component">
        <CallToAction />
        <Specials />
        <Testimonials />
        <RestaurantStory />
    </div>
  )
}

export default Home