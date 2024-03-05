import React from 'react'
import Navbar from '../includes/Navbar'
import headImg from '../assets/images/about/head-about.png'
import about1 from '../assets/images/about/about-1.png'
import about2 from '../assets/images/about/about-2.png'
import about3 from '../assets/images/about/about-3.png'
import about4 from '../assets/images/about/about-4.png'
import tuguImg from '../assets/images/about/tugu-img.png'
import sideLine from '../assets/images/about/side-line.png'
import peta from '../assets/images/about/peta.png'
import tipsMalang from '../assets/images/tips-malang.png'
import semeru from '../assets/images/about/semeru-about.png'
import jatimPark from '../assets/images/about/jtp-about.png'
import museumAngkut from '../assets/images/about/museum-about.png'
import tuguMalang from '../assets/images/about/tugu-about.png'
import cobanRondo from '../assets/images/about/coban-about.png'
import head1 from '../assets/images/about/head-about2.png'
import head2 from '../assets/images/about/head-aboutt.png'
import head3 from '../assets/images/about/head-about3.png'
import head4 from '../assets/images/about/head-about4.png'
import Footer from '../includes/Footer'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='bg-custom-100 h-full pt-24 px-0'>
            <Navbar />

            <section id='head-section' className='flex max-w-full pb-12 sm:pb-60'>
                <img className='animate__animated animate__fadeInLeft absolute top-24 z-10 max-h-full w-1/3 sm:w-80' src={head4} alt="" />
                <div className='flex flex-col'>
                    <h1 className='animate__animated animate__fadeInDown ml-10 sm:ml-44 pt-20 z-40 font-bold text-4xl sm:text-8xl text-white'>T E N T A N G</h1>
                    <h1 className='animate__animated animate__fadeInUp ml-10 sm:ml-44 sm:pt-6 z-40 font-bold text-4xl sm:text-8xl tracking-wider text-white'>M A L A N G</h1>
                </div>
                <img className='animate__animated animate__fadeInDown absolute hidden sm:block sm:top-32 sm:right-72 z-30 sm:h-2/3 w-1/3 sm:w-96' src={head2} alt="" />
                <img className='animate__animated animate__fadeInRight absolute right-0 sm:right-28 top-18 sm:top-44 z-0 h-1/3 sm:h-2/3 w-1/3 sm:max-w-full' src={head3} alt="" />
                <img className='animate__animated animate__fadeInUp absolute right-12 top-36 sm:top-40 z-1 sm:h-64 w-1/3 sm:w-48' src={head1} alt="" />
            </section>

            <section id='tentang-malang' className='pt-20 sm:pt-36 px-6 sm:px-16'>
                <div className='flex flex-col sm:flex-row w-full bg-custom-300 mb-0 sm:mb-20 rounded-3xl'>
                    <div className='flex flex-col w-full sm:w-1/2 h-full p-4'>
                        <h1 className='text-custom-500 font-medium text-xl sm:text-2xl py-2'>Tentang Malang</h1>
                        <p className='text-white font-extralight text-sm sm:text-base'>Kota Malang merupakan kota terbesar kedua di Jawa Timur setelah Surabaya. Bersama dengan Kabupaten Malang dan Kota Batu, Kota Malang merupakan bagian dari kesatuan wilayah yang dikenal dengan Malang Raya.</p>
                        <h1 className='text-custom-500 font-medium text-xl sm:text-2xl py-2'>Kenapa Malang?</h1>

                        <div className='flex flex-col sm:flex-row w-full'>
                            <div className=''>
                                <h3 className='text-custom-500  py-2 font-semibold'>- Destinasi bervariasi</h3>
                                <p className='text-white font-extralight text-sm sm:text-base'>Malang terus mengakomodasi berbagai destinasi tak hanya tempat wisata, tapi budaya, kuliner, UMKM, dan lain-lain.</p>
                            </div>

                            <div className='sm:ml-5'>
                                <h3 className='text-custom-500  py-2 font-semibold'>- Kemudahan transportasi</h3>
                                <p className='font-extralight text-white text-sm sm:text-base'>Kemajuan transportasi di Malang akan memudahkan mobilitas perjalananmu saat di Malang.</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row w-full'>
                            <div className=''>
                                <h3 className='text-custom-500  py-2 font-semibold'>- Destinasi bervariasi</h3>
                                <p className='font-extralight text-white text-sm sm:text-base'>Malang terus mengakomodasi berbagai destinasi tak hanya tempat wisata, tapi budaya, kuliner, UMKM, dan lain-lain.</p>
                            </div>

                            <div className='sm:ml-5'>
                                <h3 className='text-custom-500  py-2 font-semibold'>- Kemudahan transportasi</h3>
                                <p className='text-white font-extralight text-sm sm:text-base'>Kemajuan transportasi di Malang akan memudahkan mobilitas perjalananmu saat di Malang.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full sm:w-1/2 h-full '>
                        <div className='flex w-full h-1/2 justify-center items-center'>
                            <div className='w-1/2 m-3 sm:m-4'>
                                <img className=' max-h-full' src={about1} alt="" />
                            </div>
                            <div className='w-1/2 m-3 sm:m-4'>
                                <img className=' max-h-full' src={about2} alt="" />
                            </div>
                        </div>
                        <div className='flex w-full h-1/2 justify-center items-center'>
                            <div className='w-full  m-3 sm:m-4'>
                                <img className=' max-h-full' src={about3} alt="" />
                            </div>
                            <div className='w-full  m-3 sm:m-4'>
                                <img className=' max-h-full' src={about4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sejarah' className='flex pl-8 sm:pl-16 pt-20 w-full h-screen'>
                <div className='w-2/12 sm:w-1/12 h-full'>
                    <img className='sm:h-full' src={sideLine} alt="" />
                </div>
                <div className='flex flex-col w-10/12 sm:w-6/12 h-full pr-8'>
                    <div className='w-full mb-6'>
                        <h1 className='font-bold text-xl mb-4'>Abad ke - 8 Masehi</h1>
                        <p className='font-thin text-sm sm:text-base'>Daerah ini masih merupakan wilayah kekuasaan Kerajaan Medang. Pada masa itu, daerah ini dikenal dengan sebutan "Malang" yang berasal dari kata Mala yang artinya gunung dan ang yang artinya air. Nama ini merujuk pada kondisi geografis daerah Malang yang dikelilingi oleh pegunungan dan terdapat banyak sumber air.</p>
                    </div>
                    <div className='w-full mb-8'>
                        <h1 className='font-bold text-xl mb-4'>Abad ke - 16</h1>
                        <p className='font-thin text-sm sm:text-base'>Malang menjadi bagian dari Kesultanan Mataram yang dipimpin oleh Sultan Agung. Selanjutnya, pada abad ke-18, Malang dikuasai oleh Belanda dan dijadikan sebagai daerah kolonial.</p>
                    </div>
                    <div className='w-full mb-8'>
                        <h1 className='font-bold text-xl mb-4'>Penjajahan Belanda</h1>
                        <p className='font-thin text-sm sm:text-base'>Malang berkembang menjadi pusat perdagangan dan industri. Pada tahun 1914, Malang menjadi ibu kota dari Karesidenan Malang yang meliputi daerah-daerah di Jawa Timur.</p>
                    </div>
                    <div className='w-full'>
                        <h1 className='font-bold text-xl mb-4'>Setelah merdeka</h1>
                        <p className='font-thin text-sm sm:text-base'>Setelah Indonesia merdeka, Malang menjadi bagian dari Provinsi Jawa Timur dan berkembang menjadi salah satu kota terbesar di Jawa Timur. Kota Malang juga memiliki peran penting dalam sejarah perjuangan kemerdekaan Indonesia, terutama pada masa revolusi fisik</p>
                    </div>
                </div>
                <div className='hidden sm:block sm:w-5/12'>
                    <img className='h-5/6 ml-36 pl-4' src={tuguImg} alt="" />
                </div>
            </section>

            <section id='jelajah' className='pt-56 sm:pt-20 px-8 sm:px-16'>
                <h1 className='font-bold text-xl sm:text-3xl text-center'>Mari Jelalahi Malang</h1>
                <div className='mt-8'>
                    <img src={peta} alt="" />
                </div>
            </section>

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

            <section id='tips' className='mt-0 sm:mt-14 my-6 mb-0 sm:mb-12 h-full font-sans'>
                <h3 className='font-medium text-xl sm:text-2xl px-8 sm:px-16'>Tips berwisata ke Malang</h3>
                <div className='py-6'>
                    <img className='w-full' src={tipsMalang} alt="" />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About