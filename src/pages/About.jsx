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
import Footer from '../includes/Footer'

function About() {
    return (
        <div className='bg-custom-100 h-full pt-24 px-0'>
            <Navbar />

            <section id='head-section' className='mx-auto w-2/3 px-16'>
                <img className='' src={headImg} alt="" />
            </section>

            <section id='tentang-malang' className='pt-36 px-16'>
                <div className='flex w-full bg-custom-300 mb-20 rounded-3xl'>
                    <div className='flex flex-col w-1/2 h-full p-4'>
                        <h1 className='font-medium text-2xl py-2'>Tentang Malang</h1>
                        <p className='font-extralight'>Kota Malang merupakan kota terbesar kedua di Jawa Timur setelah Surabaya. Bersama dengan Kabupaten Malang dan Kota Batu, Kota Malang merupakan bagian dari kesatuan wilayah yang dikenal dengan Malang Raya.</p>
                        <h1 className='font-medium text-2xl py-2'>Kenapa Malang?</h1>

                        <div className='flex w-full'>
                            <div className=''>
                                <h3 className='py-2 font-semibold'>- Destinasi bervariasi</h3>
                                <p className='font-extralight'>Malang terus mengakomodasi berbagai destinasi tak hanya tempat wisata, tapi budaya, kuliner, UMKM, dan lain-lain.</p>
                            </div>

                            <div className='ml-5'>
                                <h3 className='py-2 font-semibold'>- Kemudahan transportasi</h3>
                                <p className='font-extralight'>Kemajuan transportasi di Malang akan memudahkan mobilitas perjalananmu saat di Malang.</p>
                            </div>
                        </div>

                        <div className='flex w-full'>
                            <div className=''>
                                <h3 className='py-2 font-semibold'>- Destinasi bervariasi</h3>
                                <p className='font-extralight'>Malang terus mengakomodasi berbagai destinasi tak hanya tempat wisata, tapi budaya, kuliner, UMKM, dan lain-lain.</p>
                            </div>

                            <div className='ml-5'>
                                <h3 className='py-2 font-semibold'>- Kemudahan transportasi</h3>
                                <p className='font-extralight'>Kemajuan transportasi di Malang akan memudahkan mobilitas perjalananmu saat di Malang.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/2 h-full '>
                        <div className='flex w-full h-1/2 justify-center items-center'>
                            <div className='w-1/2 m-4'>
                                <img className='rounded-2xl max-h-full' src={about1} alt="" />
                            </div>
                            <div className='w-1/2 m-4'>
                                <img className='rounded-2xl max-h-full' src={about2} alt="" />
                            </div>
                        </div>
                        <div className='flex w-full h-1/2 justify-center items-center'>
                            <div className='w-full m-4'>
                                <img className='rounded-2xl max-h-full' src={about3} alt="" />
                            </div>
                            <div className='w-full m-4 '>
                                <img className='rounded-2xl max-h-full' src={about4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sejarah' className='flex pl-16 pt-20 w-full h-screen'>
                <div className='w-1/12 h-full'>
                    <img className='h-full' src={sideLine} alt="" />
                </div>
                <div className='flex flex-col w-6/12 h-full'>
                    <div className='w-full mb-6'>
                        <h1 className='font-bold text-xl mb-4'>Abad ke - 8 Masehi</h1>
                        <p className='font-thin'>Daerah ini masih merupakan wilayah kekuasaan Kerajaan Medang. Pada masa itu, daerah ini dikenal dengan sebutan "Malang" yang berasal dari kata Mala yang artinya gunung dan ang yang artinya air. Nama ini merujuk pada kondisi geografis daerah Malang yang dikelilingi oleh pegunungan dan terdapat banyak sumber air.</p>
                    </div>
                    <div className='w-full mb-8'>
                        <h1 className='font-bold text-xl mb-4'>Abad ke - 16</h1>
                        <p className='font-thin'>Malang menjadi bagian dari Kesultanan Mataram yang dipimpin oleh Sultan Agung. Selanjutnya, pada abad ke-18, Malang dikuasai oleh Belanda dan dijadikan sebagai daerah kolonial.</p>
                    </div>
                    <div className='w-full mb-8'>
                        <h1 className='font-bold text-xl mb-4'>Penjajahan Belanda</h1>
                        <p className='font-thin'>Malang berkembang menjadi pusat perdagangan dan industri. Pada tahun 1914, Malang menjadi ibu kota dari Karesidenan Malang yang meliputi daerah-daerah di Jawa Timur.</p>
                    </div>
                    <div className='w-full'>
                        <h1 className='font-bold text-xl mb-4'>Setelah merdeka</h1>
                        <p className='font-thin'>Setelah Indonesia merdeka, Malang menjadi bagian dari Provinsi Jawa Timur dan berkembang menjadi salah satu kota terbesar di Jawa Timur. Kota Malang juga memiliki peran penting dalam sejarah perjuangan kemerdekaan Indonesia, terutama pada masa revolusi fisik</p>
                    </div>
                </div>
                <div className='w-5/12'>
                    <img className='h-5/6 ml-36 pl-4' src={tuguImg} alt="" />
                </div>
            </section>

            <section id='jelajah' className='pt-20 px-16'>
                <h1 className='font-bold text-3xl text-center'>Mari Jelalahi Malang</h1>
                <div className='mt-8'>
                    <img src={peta} alt="" />
                </div>
            </section>

            <section id='destinasi' className='pt-20 px-16'>
                <h1 className='font-medium text-xl text-start'>Destinasi Malang</h1>
                <div className=''>
                    <div className="grid w-full py-12 grid-cols-3 gap-10 mb-12">
                        <div className="md:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                            <div className='flex flex-col'>
                                <div className='h-full w-full'>
                                    <img className='w-full h-full' src={semeru} alt="" />
                                </div>
                                {/* <div className='mb-16 mx-4'>
                                    <h1 className='font-bold my-4'>Berburu Sunrise</h1>
                                    <p className='font-thin'>Melihat matahari terbit di Gunung Semeru merupakan pengalaman yang luar biasa. Maka dari itu, banyak orang berlomba-lomba datang pagi buta untuk mendapatkan pemandangan matahari terbit.</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="md:col-span-1 bg-custom-300 shadow-md rounded-xl">
                            <div className='flex flex-col'>
                                <div className='h-full w-full'>
                                    <img className='w-full h-full' src={jatimPark} alt="" />
                                </div>
                                {/* <div className='mb-6 mx-4'>
                                    <h1 className='font-bold my-4'>Camping</h1>
                                    <p className='font-thin'>Ranu Kumbolo adalah salah satu tempat peristirahatan para pendaki untuk mendirikan tenda yang tak cuma sebagai tempat melepas penat tapi juga memanjakan mata.</p>
                                </div> */}
                            </div>
                        </div>

                        <div className="md:col-span-1 row-span-3 bg-custom-300 shadow-md rounded-xl">
                            <div className='flex flex-col'>
                                <div className='h-full w-full'>
                                    <img className='w-full h-full' src={cobanRondo} alt="" />
                                </div>
                                {/* <div className='mb-16 mx-4'>
                                    <h1 className='font-bold my-4'>Pendakian</h1>
                                    <p className='font-thin'>Ke Gunung Semeru pasti sangat lekat dengan pendakian. Pastikan menggunakan rute yang sudah dipastikan aman untuk mendapatkan pengalaman mendaki yang baik.</p>
                                </div> */}
                            </div>
                        </div>

                        <div className="md:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                            <div className='flex flex-col'>
                                <div className='h-full w-full'>
                                    <img className='w-full max-h-full' src={tuguMalang} alt="" />
                                </div>
                                {/* <div className='mb-16 mx-4'>
                                    <h1 className='font-bold my-4'>Sensasi Mobil Jeep</h1>
                                    <p className='font-thin'>Menaiki Mobil Jeep di medan pegunungan tentunya menantang adrenalin dan sangat cocok bagi kamu yang menyukai tantangan.</p>
                                </div> */}
                            </div>
                        </div>

                        <div className="md:col-span-1 bg-custom-300 shadow-md rounded-xl">
                            <div className='flex flex-col'>
                                <div className='h-full w-full'>
                                    <img className='w-full max-h-full' src={museumAngkut} alt="" />
                                </div>
                                {/* <div className='mb-6 mx-4'>
                                    <h1 className='font-bold my-4'>Mengunjungi Arcopodo</h1>
                                    <p className='font-thin'>Arcopodo adalah dua arca yang berdampingan di dalam hutan Gunung Semeru. Kedua arca tersebut sama-sama menghadap ke utara yang berarti pula menatap lurus ke arah Puncak Mahameru.</p>
                                </div> */}
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section id='tips' className='mt-14 my-6 mb-12 h-full font-sans'>
                <h3 className='font-medium text-2xl px-16'>Tips berwisata ke Malang</h3>
                <div className='py-6'>
                    <img className='w-full' src={tipsMalang} alt="" />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About