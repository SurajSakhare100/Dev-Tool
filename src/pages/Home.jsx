import React from 'react'
import HeroSection from '../components/sections/herosection/HeroSection'
import Features from '../components/sections/features/Features'
import Testimonial from '../components/sections/testimonial/Testimonial'

function Home() {
    return (
       <div>
        <HeroSection/>
        <Features/>
        <Testimonial/>
       </div>
    )
}

export default Home
