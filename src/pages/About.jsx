import React from 'react'
import Navbar from '../includes/Navbar'
import headImg from '../assets/images/about/head-about.png'

function About() {
    return (
        <div className='bg-custom-100 h-full pt-24 px-32'>
            <Navbar />
            <div className='w-'>
                <img className='max-w-full' src={headImg} alt="" />
            </div>
        </div>
    )
}

export default About