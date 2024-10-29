import React, { useEffect } from 'react'
import HeroSection from '../components/sections/herosection/HeroSection'
import Features from '../components/sections/features/Features'
import Testimonial from '../components/sections/testimonial/Testimonial'
import Faq from '../components/faq/Faq';

function Home() {
    useEffect(() => {
        document.title = 'JSON Tools | Dev Tool - Convert and Format JSON Effortlessly';
      }, []);
    return (
       <div>
        <HeroSection/>
        <Features/>
        <Testimonial/>
        <Faq/>
       </div>
    )
}

export default Home
