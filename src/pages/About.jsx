import React from 'react'
import Navbar from '../includes/Navbar'
import semeruImg from '../assets/images/semeru.png'

function About() {
    return (
        <div className='bg-custom-100 h-screen'>
            <Navbar />
            <div className='flex justify-between'>
                <div className='flex flex-col font-sans w-1/2 ml-10'>
                    <div className='font-medium mt-14 text-8xl'>
                        <h1 className='tracking-wider'>GUNUNG</h1>
                        <h1 className='tracking-wider'>SEMERU</h1>
                    </div>
                    <div className='font-thin text-xl ml-1 pr-12 mr-12 mt-10'>
                        <p className=''>
                            Gunung Bromo adalah salah satu gunung api yang masih aktif di Indonesia. Gunung yang memiliki ketinggian 2.392 meter di atas permukaan laut ini merupakan destinasi andalan Jawa Timur. Gunung Bromo berdiri gagah dikelilingi kaldera atau lautan pasir seluas 10 kilometer persegi.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end w-1/2 mr-14'>
                    <img className='' src={semeruImg} alt="" />
                </div>
            </div>



        </div>
    )
}

export default About