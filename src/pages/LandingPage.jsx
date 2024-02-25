import React from 'react'
// import { ParallaxProvider } from 'react-scroll-parallax'
// import { Parallax } from 'react-scroll-parallax'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
// import soal from '../assets/images/soal.svg'
// import hero1 from '../assets/images/hero1.png'
// import hero2 from '../assets/images/hero2.png'
// import Button from '../components/Button'

function LandingPage() {
  return (
    <div className=''>
      <Navbar />
      {/* <section id='hero'>
        <ParallaxProvider>
            <img src={soal}/>
        </ParallaxProvider>
      </section> */}
      
      <Footer />
    </div>
  )
}

export default LandingPage