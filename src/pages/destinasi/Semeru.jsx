import React from 'react'
import Navbar from '../../includes/Navbar'
import semeruImg from '../../assets/images/semeru.png'
import ranuRegulo from '../../assets/images/regulo.png'
import ranuKumbolo from '../../assets/images/kumbolo.png'
import padangOmbo from '../../assets/images/ororo ombo.png'
import puncakSemeru from '../../assets/images/puncak.png'
import tanjakanCinta from '../../assets/images/tanjakan.png'
import pendakian from '../../assets/images/pendakian.png'
import sensasiJeep from '../../assets/images/sensasi-jeep.png'
import camping from '../../assets/images/camping.png'
import sunrise from '../../assets/images/berburu-sunrise.png'
import arcopodo from '../../assets/images/arcopodo.png'

function Semeru() {


    return (
        <div className='bg-custom-100 h-full'>
            <Navbar />
            <section id='head-section' className='flex justify-between pt-8 mb-12'>
                <div className='flex flex-col font-sans w-1/2 ml-16'>
                    <div className='font-medium mt-14 text-8xl'>
                        <h1 className='tracking-wider'>GUNUNG</h1>
                        <h1 className='tracking-wider'>SEMERU</h1>
                    </div>
                    <div className='font-thin text-xl ml-1 pr-12  mt-10'>
                        <p className=''>
                            Gunung Bromo adalah salah satu gunung api yang masih aktif di Indonesia. Gunung yang memiliki ketinggian 2.392 meter di atas permukaan laut ini merupakan destinasi andalan Jawa Timur. Gunung Bromo berdiri gagah dikelilingi kaldera atau lautan pasir seluas 10 kilometer persegi.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end w-1/2 mr-16'>
                    <img className='' src={semeruImg} alt="" />
                </div>
            </section>
            <section id='content-section' className='mx-16 my-6 font-sans'>
                <h3 className='font-medium text-2xl'>Apa saja di Gunung Semeru?</h3>
                <div className="grid w-full py-12 grid-cols-3 gap-10 mb-12">
                    <div className="md:col-span-1 row-span-2 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-72 w-full'>
                                <img className='w-full max-h-full' src={ranuKumbolo} alt="" />
                            </div>
                            <div className='mb-16 mx-4'>
                                <h1 className='font-bold my-4'>Ranu Kumbolo</h1>
                                <p className='font-thin'>Ranu Kumbolo adalah sebuah danau yang terletak di dalam Taman Nasional Bromo Tengger Semeru, Jawa Timur, Indonesia. Danau ini merupakan bagian dari rute termudah yang berasal dari Ranu Pani menuju puncak Gunung Semeru.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-40 w-full'>
                                <img className='w-full max-h-full' src={padangOmbo} alt="" />
                            </div>
                            <div className='mb-6 mx-4'>
                                <h1 className='font-bold my-4'>Padang Bunga Oro-Oro Ombo</h1>
                                <p className='font-thin'>Oro-oro Ombo sendiri merupakan padang luas berisi hamparan bunga kecil berwarna ungu, yang oleh para pendaki disebut Lavender.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 row-span-2 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-72 w-full'>
                                <img className='w-full max-h-full' src={puncakSemeru} alt="" />
                            </div>
                            <div className='mb-16 mx-4'>
                                <h1 className='font-bold my-4'>Puncak Mahameru</h1>
                                <p className='font-thin'>Puncak merupakan impian bagi semua pendaki, termasuk Puncak Mahameru yang menjadi puncak gunung tertinggi ke-2 di Indonesia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 row-span-2 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-72 w-full'>
                                <img className='w-full max-h-full' src={puncakSemeru} alt="" />
                            </div>
                            <div className='mb-16 mx-4'>
                                <h1 className='font-bold my-4'>Ranu Pani</h1>
                                <p className='font-thin'>Ranu Pani adalah tempat wisata yang termasuk dalam kawasan Gunung Semeru. Area ini sering dijadikan sebagai titik awal bagi para pendaki yang akan menuju ke puncak Gunung Semeru.
                                    Ranu Pane juga menyajikan pemandangan gunung dan danau yang menenangkan.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-40 w-full'>
                                <img className='w-full max-h-full' src={tanjakanCinta} alt="" />
                            </div>
                            <div className='mb-6 mx-4'>
                                <h1 className='font-bold my-4'>Tanjakan Cinta</h1>
                                <p className='font-thin'>Jalan yang menanjak dengan kemiringan 45 derajat tersebut memiliki mitos, jika sang pendaki menoleh ke belakang maka ia akan putus cinta.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-40 w-full'>
                                <img className='w-full max-h-full' src={ranuRegulo} alt="" />
                            </div>
                            <div className='mb-6 mx-4'>
                                <h1 className='font-bold my-4'>Ranu Regulo</h1>
                                <p className='font-thin'>Ranu Regulo, yaitu danau air tawar yang dikunjungi pendaki yang hendak summit di Mahameru. Letaknya tidak jauh dari Ranu Pani dan sedikit tersembunyi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='activity' className='mx-16 my-6 font-sans'>
                <h3 className='font-medium text-2xl'>Rekomendasi aktivitas di Gunung Semeru</h3>
                <div className="grid w-full py-12 grid-cols-3 gap-10 mb-12">
                    <div className="md:col-span-1 row-span-2 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-72 w-full'>
                                <img className='w-full max-h-full' src={sunrise} alt="" />
                            </div>
                            <div className='mb-16 mx-4'>
                                <h1 className='font-bold my-4'>Berburu Sunrise</h1>
                                <p className='font-thin'>Melihat matahari terbit di Gunung Semeru merupakan pengalaman yang luar biasa. Maka dari itu, banyak orang berlomba-lomba datang pagi buta untuk mendapatkan pemandangan matahari terbit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-40 w-full'>
                                <img className='w-full max-h-full' src={camping} alt="" />
                            </div>
                            <div className='mb-6 mx-4'>
                                <h1 className='font-bold my-4'>Camping</h1>
                                <p className='font-thin'>Ranu Kumbolo adalah salah satu tempat peristirahatan para pendaki untuk mendirikan tenda yang tak cuma sebagai tempat melepas penat tapi juga memanjakan mata.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 row-span-2 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-72 w-full'>
                                <img className='w-full max-h-full' src={pendakian} alt="" />
                            </div>
                            <div className='mb-16 mx-4'>
                                <h1 className='font-bold my-4'>Pendakian</h1>
                                <p className='font-thin'>Ke Gunung Semeru pasti sangat lekat dengan pendakian. Pastikan menggunakan rute yang sudah dipastikan aman untuk mendapatkan pengalaman mendaki yang baik.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 row-span-2 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-72 w-full'>
                                <img className='w-full max-h-full' src={sensasiJeep} alt="" />
                            </div>
                            <div className='mb-16 mx-4'>
                                <h1 className='font-bold my-4'>Sensasi Mobil Jeep</h1>
                                <p className='font-thin'>Menaiki Mobil Jeep di medan pegunungan tentunya menantang adrenalin dan sangat cocok bagi kamu yang menyukai tantangan.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-40 w-full'>
                                <img className='w-full max-h-full' src={arcopodo} alt="" />
                            </div>
                            <div className='mb-6 mx-4'>
                                <h1 className='font-bold my-4'>Mengunjungi Arcopodo</h1>
                                <p className='font-thin'>Arcopodo adalah dua arca yang berdampingan di dalam hutan Gunung Semeru. Kedua arca tersebut sama-sama menghadap ke utara yang berarti pula menatap lurus ke arah Puncak Mahameru.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 bg-white shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-40 w-full'>
                                <img className='w-full max-h-full' src={padangOmbo} alt="" />
                            </div>
                            <div className='mb-6 mx-4'>
                                <h1 className='font-bold my-4'>Berburu Foto Instagenik</h1>
                                <p className='font-thin'>Tak afdol jika sudah jauh-jauh ke Gunung Semeru tapi tidak mengabadikan momen-momen indah yang bahkan didukung pemandangan super indah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Semeru