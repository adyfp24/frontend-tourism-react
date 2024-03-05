import React from 'react'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
import destinasi1 from '../assets/images/des-tugu.png'
import destinasi2 from '../assets/images/des-angkut.png'
import destinasi3 from '../assets/images/des-park.png'
import semeru from '../assets/images/about/semeru-about.png'
import jatimPark from '../assets/images/about/jtp-about.png'
import museumAngkut from '../assets/images/about/museum-about.png'
import tuguMalang from '../assets/images/about/tugu-about.png'
import cobanRondo from '../assets/images/about/coban-about.png'
import tipsMalang from '../assets/images/tips-malang.png'
import head1 from '../assets/images/destinasi/head-destinasi.png'
import head2 from '../assets/images/destinasi/head-destinasi2.png'
import head3 from '../assets/images/destinasi/head-destinasi3.png'
import head4 from '../assets/images/destinasi/head-destinasi4.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

function Destinasi() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='bg-custom-100 pt-24 h-full font-sans'>
      <Navbar />

      <section id='head-section' className='flex max-w-full sm:pb-72'>
        <img className='animate__animated animate__fadeInLeft absolute top-24 z-10 max-h-full w-1/3 sm:w-80' src={head4} alt="" />
        <div className='flex flex-col'>
          <h1 className='animate__animated animate__fadeInDown ml-10 sm:ml-40 pt-20 z-40 font-bold text-4xl sm:text-8xl text-white'>D E S T I N A S I</h1>
          <h1 className='animate__animated animate__fadeInUp ml-10 sm:ml-40 sm:pt-6 z-40 font-bold text-4xl sm:text-8xl tracking-wider text-white'>M A L A N G</h1>
        </div>
        <img className='animate__animated animate__fadeInDown absolute hidden sm:block sm:top-32 sm:right-72 z-30 sm:h-2/3 w-1/3 sm:w-96' src={head2} alt="" />
        <img className='animate__animated animate__fadeInRight absolute right-0 sm:right-28 top-18 sm:top-44 z-0 h-1/3 sm:h-2/3 w-1/3 sm:max-w-full' src={head3} alt="" />
        <img className='animate__animated animate__fadeInUp absolute right-12 top-36 sm:top-40 z-1 sm:h-64 w-1/3 sm:w-48' src={head1} alt="" />
      </section>


      <section id='kunjungan' className='mx-8 sm:mx-16 mt-28 sm:mt-14 my-6 h-full font-sans'>
        <h3 className='font-medium text-xl sm:text-2xl'>Destinasi Favorit</h3>
        <div className='px-1 sm:px-6'>
          <Slider className='w-full py-6 sm:py-12 mb-12 px-2' {...settings}>
            <div className=''>
              <img className='w-5/6' src={destinasi1} alt="" />
            </div>
            <div className=''>
              <img className='w-5/6' src={destinasi2} alt="" />
            </div>
            <div className=''>
              <img className='w-5/6' src={destinasi3} alt="" />
            </div>
          </ Slider>
        </div>
      </section>
      <section id='kunjungan' className='mx-8 sm:mx-16 mt-14 my-6 h-full font-sans'>
        <h3 className='font-medium text-xl sm:text-2xl'>Rekomendasi Akhir Pekan</h3>
        <div className='px-1 sm:px-6'>
          <Slider className='w-full py-6 sm:py-12 mb-12 px-2' {...settings}>
            <div className=''>
              <img className='w-5/6' src={destinasi1} alt="" />
            </div>
            <div className=''>
              <img className='w-5/6' src={destinasi2} alt="" />
            </div>
            <div className=''>
              <img className='w-5/6' src={destinasi3} alt="" />
            </div>
          </ Slider>
        </div>
      </section>

      <iframe className='w-full h-72 sm:h-screen' src='https://www.youtube.com/embed/fC2TW1mshxs?si=9jfWTZmcXU9otGgn'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
      />

      <section id='destinasi' className='pt-10 sm:pt-20 px-8 sm:px-16'>
        <h1 className='font-medium text-xl sm:text-2xl text-start'>Destinasi Malang</h1>
        <div className=''>
          <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
            <div className="md:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
              <div className='flex flex-col'>
                <Link to='/destinasi/semeru'>
                  <div className='relative group h-full w-full'>
                    <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={semeru} alt="" />
                    <div className="absolute top-16 left-10 lg:top-44 lg:left-32 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Semeru
                    </div>
                  </div>

                </Link>
                {/* <div className='mb-16 mx-4'>
                                    <h1 className='font-bold my-4'>Berburu Sunrise</h1>
                                    <p className='font-thin'>Melihat matahari terbit di Gunung Semeru merupakan pengalaman yang luar biasa. Maka dari itu, banyak orang berlomba-lomba datang pagi buta untuk mendapatkan pemandangan matahari terbit.</p>
                                </div> */}
              </div>
            </div>
            <div className="md:col-span-1 bg-custom-300 shadow-md rounded-xl">
              <div className='flex flex-col'>
                <Link to='/destinasi/jatim-park'>
                  <div className='h-full w-full relative group'>
                    <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={jatimPark} alt="" />
                    <div className="absolute top-16 left-10 lg:top-44 lg:left-32 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Jatim Park
                    </div>
                  </div>
                </Link>
                {/* <div className='mb-6 mx-4'>
                                    <h1 className='font-bold my-4'>Camping</h1>
                                    <p className='font-thin'>Ranu Kumbolo adalah salah satu tempat peristirahatan para pendaki untuk mendirikan tenda yang tak cuma sebagai tempat melepas penat tapi juga memanjakan mata.</p>
                                </div> */}
              </div>
            </div>

            <div className="md:col-span-1 row-span-3 bg-custom-300 shadow-md rounded-xl">
              <div className='flex flex-col'>
                <Link to='/destinasi/coban-rondo'>
                  <div className='relative group h-full w-full'>
                    <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={cobanRondo} alt="" />
                    <div className="absolute top-16 left-10 lg:top-44 lg:left-32 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Coban Rondo
                    </div>
                  </div>
                </Link>
                {/* <div className='mb-16 mx-4'>
                                    <h1 className='font-bold my-4'>Pendakian</h1>
                                    <p className='font-thin'>Ke Gunung Semeru pasti sangat lekat dengan pendakian. Pastikan menggunakan rute yang sudah dipastikan aman untuk mendapatkan pengalaman mendaki yang baik.</p>
                                </div> */}
              </div>
            </div>

            <div className="md:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
              <div className='flex flex-col relative group'>
                <Link to='/destinasi/tugu-malang'>
                  <div className='h-full w-full'>
                    <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={tuguMalang} alt="" />
                    <div className="absolute top-16 left-10 lg:top-44 lg:left-32 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Tugu Malang
                    </div>
                  </div>
                </Link>
                {/* <div className='mb-16 mx-4'>
                                    <h1 className='font-bold my-4'>Sensasi Mobil Jeep</h1>
                                    <p className='font-thin'>Menaiki Mobil Jeep di medan pegunungan tentunya menantang adrenalin dan sangat cocok bagi kamu yang menyukai tantangan.</p>
                                </div> */}
              </div>
            </div>

            <div className="md:col-span-1 bg-custom-300 shadow-md rounded-xl">
              <div className='flex flex-col'>
                <Link to='/destinasi/museum-angkut'>
                  <div className='h-full w-full relative group'>
                    <img className='w-full h-full transition-transform duration-500 transform group-hover:brightness-75' src={museumAngkut} alt="" />
                    <div className="absolute top-16 left-10 lg:top-44 lg:left-32 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Museum Angkut
                    </div>
                  </div>
                </Link>
                {/* <div className='mb-6 mx-4'>
                                    <h1 className='font-bold my-4'>Mengunjungi Arcopodo</h1>
                                    <p className='font-thin'>Arcopodo adalah dua arca yang berdampingan di dalam hutan Gunung Semeru. Kedua arca tersebut sama-sama menghadap ke utara yang berarti pula menatap lurus ke arah Puncak Mahameru.</p>
                                </div> */}
              </div>
            </div>


          </div>
        </div>
      </section>


      <section id='tips' className=' sm:mt-14 my-6 mb-0 sm:mb-12 h-full font-sans'>
        <h3 className='font-medium text-xl sm:text-2xl px-8 sm:px-16'>Tips berwisata ke Malang</h3>
        <div className=' py-6'>
          <img className='w-full' src={tipsMalang} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Destinasi