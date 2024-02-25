import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
import soal from '../assets/images/soal.svg'
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.png'
import Button from '../components/Button'

function LandingPage() {
  return (
    <div className=''>
      <Navbar />
      <section id='hero'>
        <ParallaxProvider>
            <img src={soal}/>
        </ParallaxProvider>
      </section>
      <section id='about' className='bg-[#B4C6A6] flex justify-center relative'>
        <div className='absolute bg-slate-300 rounded-xl w-[80%] h-[60%]'></div>
        <div id='about-container' className='bg-green-500 w-[90%] rounded-3xl relative'>
          <div className='grid grid-cols-5'>
            <div className='flex justify-around items-center col-span-3'>
              <div>
                <img src={hero2} className='rounded-xl'/>
              </div>
              <div>
                <img src={hero1} className='rounded-xl'/>
              </div>
            </div>
            <div className='bg-yellow-500 col-span-2 flex justify-center items-center'>
              <div className='py-16 px-8'>
                <div id='text-box' className='mb-8'>
                  <h1 className='font-semibold text-2xl'>Tentang Malang</h1>
                  <p>Kota Malang adalah sebuah kota yang terletak di provinsi Jawa Timur, Indonesia, Kota terbesar kedua di Jawa Timur setelah Surabaya, dan kota terbesar ke-12 di Indonesia. Kota ini didirikan pada masa Pemerintahan Belanda pada tanggal 1 April 1914 dengan E.K Broeveldt sebagai wali kota pertama.</p>
                </div>
                <Button label={'Selengkapnya'}/>`
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage