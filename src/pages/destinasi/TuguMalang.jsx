import React from 'react'
import Navbar from '../../includes/Navbar'
import Footer from '../../includes/Footer'
import tuguImg from '../../assets/images/tugu-malang/tugu.png'
import alunAlun from '../../assets/images/tugu-malang/alun-alun.png'
import iconTugu from '../../assets/images/tugu-malang/icon-tugu.png'
import hotelTugu from '../../assets/images/tugu-malang/hotel-tugu.png'
import pedestrian from '../../assets/images/tugu-malang/pedestrian.png'
import balaiKota from '../../assets/images/tugu-malang/balai-kota.png'
import kunjungPasar from '../../assets/images/tugu-malang/kunjung-pasar.png'
import piknik from '../../assets/images/tugu-malang/piknik.png'
import jalan from '../../assets/images/tugu-malang/jalan.png'
import streetFood from '../../assets/images/tugu-malang/street-food.png'
import familyTime from '../../assets/images/tugu-malang/family-time.png'
import berburuFoto from '../../assets/images/tugu-malang/berburu-foto.png'
import mapSemeru from '../../assets/images/map-semeru.png'
import reviewPutu from '../../assets/images/review-putu.png'
import reviewSalak from '../../assets/images/review-salak.png'
import reviewTempe from '../../assets/images/review-tempe.png'
import camera from '../../assets/images/camera.png'
import star from '../../assets/images/star.png'
import destinasi1 from '../../assets/images/des-tugu.png'
import destinasi2 from '../../assets/images/des-angkut.png'
import destinasi3 from '../../assets/images/des-park.png'
import tipsMalang from '../../assets/images/tips-malang.png'
import cuaca1 from '../../assets/images/destinasi/cuaca1.png'
import cuaca2 from '../../assets/images/destinasi/cuaca2.png'
import starKiri from '../../assets/images/destinasi/star-kiri.png'
import starKanan from '../../assets/images/destinasi/star-kanan.png'
import ppReview from '../../assets/images/destinasi/pp-review.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function TuguMalang() {
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
        <div className='bg-custom-100 h-full font-sans'>
            <Navbar />
            <section id='head-section' className='flex mx-8 sm:mx-16 flex-col-reverse sm:flex-row justify-between pt-14 sm:pt-8 mb-6 sm:mb-12'>
                <div className='flex flex-col font-sans w-full sm:w-1/2'>
                    <div className='font-bold mt-6 sm:mt-14 md:text-8xl text-4xl'>
                        <h1 className='tracking-wider'>TUGU</h1>
                        <h1 className='tracking-wider'>MALANG</h1>
                    </div>
                    <div className='font-thin text-xl ml-1 mt-4 text-justify sm:mt-10'>
                        <p className=''>
                        Alun-Alun Tugu Kota Malang merupakan salah satu simbol landmark dari Kota Malang, Jawa Timur. Tempat ini berbentuk lingkaran dengan tugu sebagai pusat dari tempat tersebut. Alun-Alun ini juga dilengkapi dengan lampu-lampu cantik yang bersinar di setiap malam. Di balik keindahannya, tempat ini menyimpan nilai sejarah, mulai dari zaman penjajahan Belanda hingga saat ini.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end w-full sm:w-1/2 sm:px-0'>
                    <img className='animate__animated animate__fadeInRight' src={tuguImg} alt="" />
                </div>
            </section>

            <section id='content-section' className='mx-8 sm:mx-16 my-3 sm:my-6 font-sans'>
                <h3 className='font-medium text-xl sm:text-2xl'>Apa saja di Tugu Malang?</h3>
                <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
                    <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-72 w-full'>
                                <img className='w-full max-h-full' src={iconTugu} alt="" />
                            </div>
                            <div className='mb-16 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Monumen Tugu Malang</h1>
                                <p className='font-thin'>Monumen Tugu Malang merupakan ikon kota Malang yang terletak di tengah alun-alun Malang. Monumen ini telah menjadi icon kota malang dan kental akan sejarah perkembangan kota malang</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-40 w-full'>
                                <img className='w-full max-h-full' src={balaiKota} alt="" />
                            </div>
                            <div className='mb-6 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Balai Kota</h1>
                                <p className='font-thin'>Terdapat bangunan kantor pejabat dan walikota malang, Gaya bangunan pada balai kota malang masih bergaya kolonial kaena memang merupakan peninggalan era belanda</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-72 w-full'>
                                <img className='w-full max-h-full' src={pedestrian} alt="" />
                            </div>

                            <div className='mb-16 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Pedestrian</h1>
                                <p className='font-thin'>Terdapat pedestrian yang cukup luas dan dapat dilalui oleh para pengunjung sambil bersantai dan menikmati keindahan taman kota di sekitar tugu malang</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-72 w-full'>
                                <img className='w-full max-h-full' src={alunAlun} alt="" />
                            </div>
                            <div className='mb-16 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Taman Kota</h1>
                                <p className='font-thin'>Tugu malang dikelilingi oleh taman kota yang terdapat didalamnya aneka bunga baik bunga alami maupun bunga buatan. Taman kota pun tampak semakin indah ketika menyala di malam hari</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-40 w-full'>
                                <img className='w-full max-h-full' src={balaiKota} alt="" />
                            </div>
                            <div className='mb-6 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Kolam Air Lily</h1>
                                <p className='font-thin'>Tugu Malang dikelilingi oleh kolam air bunga lil. Bunga lily disini dimaknai dengan kesucian dan kebaikan</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col '>
                            <div className='h-full sm:h-40 w-full'>
                                <img className='w-full max-h-full' src={hotelTugu} alt="" />
                            </div>
                            <div className='mb-6 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Hotel Tugu</h1>
                                <p className='font-thin'>Hotel Tugu Malang adalah salah satu hotel terkenal di sekitar Tugu Malang untuk mengakomodasi kemudahan perjalanan pengunjung.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='activity' className='mx-8 sm:mx-16 my-3 sm:my-6 font-sans'>
                <h3 className='font-medium text-xl sm:text-2xl'>Rekomendasi aktivitas di Tugu Malang</h3>
                <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
                    <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-72 w-full'>
                                <img className='w-full max-h-full' src={streetFood} alt="" />
                            </div>
                            <div className='mb-16 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Berburu Streetfood</h1>
                                <p className='font-thin'>Siapapun pasti suka jajanan dan pastinya Daerah sekitar Tugu Malang menghadirkan berbagai street food yang bisa kamu coba</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-40 w-full'>
                                <img className='w-full max-h-full' src={kunjungPasar} alt="" />
                            </div>
                            <div className='mb-6 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Berkunjung ke Pasar Minggu</h1>
                                <p className='font-thin'>Pasar Minggu Gajahyana adalah salah satu pasar minggu yang terkenal di Malang. Banyak variasi mulai dari makanan, perkakas, dan lain-lain.</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-72 w-full'>
                                <img className='w-full max-h-full' src={jalan} alt="" />
                            </div>
                            <div className='mb-16 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Jalan-jalan</h1>
                                <p className='font-thin'>Berkeliling Tugu Malang memang tak ada habisnya. Habiskan waktu senggangmu dengan berjalan-jalan untuk menyegarkan badan dan pikiran</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-72 w-full'>
                                <img className='w-full max-h-full' src={berburuFoto} alt="" />
                            </div>
                            <div className='mb-16 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Berburu Foto Instagenik</h1>
                                <p className='font-thin'>Tak afdol jika berkeliling Tugu Malang yang ikonik tapi tidak mengabadikan momen di setiap sudutnya yang indah.</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-40 w-full'>
                                <img className='w-full max-h-full' src={familyTime} alt="" />
                            </div>
                            <div className='mb-6 mx-4 hidden sm:block'>
                                <h1 className='font-bold my-4'>Family Time</h1>
                                <p className='font-thin'>Menghabiskan waktu bersama keluarga, berbincang bersama, dan bermain bersama tentu aktivitas yang sangat mengasyikkan</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-1 shadow-md rounded-xl bg-custom-300">
                        <div className='flex flex-col'>
                            <div className='h-full sm:h-40 w-full'>
                                <img className='w-full max-h-full' src={piknik} alt="" />
                            </div>
                            <div className='mb-6 mx-4 hidden sm:block'>
                                <h1 className='font-bold py-4'>Piknik</h1>
                                <p className='font-thin'>Pemandangan yang bagus, rumput yang hijau dan sejuk cocok untuk piknik bersama keluarga, teman, atau orang tersayang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='location' className='mx-8 sm:mx-16 py-6 font-sans'>
                <div className='flex w-full'>
                    <div className='flex w-2/3 mr-2 sm:mr-6 rounded-lg'>
                        <img src={mapSemeru} alt="" />
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <div className='h-1/2 bg-custom-300 rounded-lg sm:mb-4 sm:ml-4'>
                            <img src={cuaca1} alt="" />
                        </div>
                        <div className='h-1/2 bg-custom-300 rounded-lg mt-2 sm:mt-4 sm:ml-4'>
                            <img src={cuaca2} alt="" />
                        </div>
                    </div>
                </div>
               
            </section>

            <section id='umkm' className='mx-8 sm:mx-16 my-6 h-full font-sans'>
                <h3 className='font-medium text-xl  sm:text-2xl'>Support UMKM sekitar </h3>
                <div className='px-2 sm:px-6'>
                    <Slider className='w-full py-12 sm:mb-12 px-2' {...settings}>
                        <div className=''>
                            <img className='w-5/6' src={reviewPutu} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-5/6' src={reviewSalak} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-5/6' src={reviewTempe} alt="" />
                        </div>
                    </ Slider>
                </div>
            </section>

            <section id='review' className='mx-8 sm:mx-16 sm:my-6 sm:pt-6 h-full font-sans'>
                <h3 className='font-medium text-xl sm:text-2xl'>Review </h3>
                <div className='flex flex-col w-full h-full'>
                    <div className='flex justify-between py-6'>
                        <div className=''>
                            <div className=''>
                                <div className='flex items-center mb-1 sm:mb-3'>
                                    <h1 className='text-xl sm:text-2xl  font-bold'>4,9</h1>
                                    <h4 className='text-xs sm:text-base font-thin ml-2 sm:ml-6'>854 Reviews</h4>
                                </div>
                                <img className='w-2/3 sm:w-full' src={starKiri} alt="" />
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex justify-end sm:'>
                                <img className='w-2/3 sm:w-full h-full' src={starKanan} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full flex-col'>
                        <div className='w-full h-full sm:h-36 flex mb-4'>
                            <div className='flex w-4/12 h-full'>
                                <div >
                                    <img className='' src={ppReview} alt="" />
                                </div>
                                <div className='flex flex-col pl-1 sm:pl-0 sm:mt-2'>
                                    <img className='w-20' src={starKiri} alt="" />
                                    <h3 className='text-sm font-medium'>Yurasara</h3>
                                    <h6 className='text-xs font-thin'>2 Maret 2023</h6>
                                </div>
                            </div>
                            <div className='flex flex-col w-8/12 ml-4  h-full'>
                                <h3 className='font-semibold text-sm sm:text-lg'>Tertata dengan bagus</h3>
                                <p className='text-xs sm:text-base font-thin text-justify'>Monumen tugunya bagus, aku paling suka kolam air lilynya  karena memang itu bungan kesukaanku. Selalu menyenangkan datang kesini apalagi bersama keluarga </p>
                            </div>

                        </div>
                        <div className='w-full h-0.5 mb-4 bg-gray-300'></div>
                        <div className='w-full h-full sm:h-36 flex mb-4'>
                            <div className='flex w-4/12 h-full'>
                                <div >
                                    <img className='' src={ppReview} alt="" />
                                </div>
                                <div className='flex flex-col pl-1 sm:pl-0 sm:mt-2'>
                                    <img className='w-20' src={starKiri} alt="" />
                                    <h3 className='text-sm font-medium'>Yurasara</h3>
                                    <h6 className='text-xs font-thin'>2 Maret 2023</h6>
                                </div>
                            </div>
                            <div className='flex flex-col w-8/12 ml-4  h-full'>
                                <h3 className='font-semibold text-sm sm:text-lg'>Cocok buat refreshing</h3>
                                <p className='text-xs sm:text-base font-thin text-justify'>Kemarin kesini gara-gara lagi suntuk aja sama kerjaan. Ternyata bagus juga tugu malang ini. enak buat santai-santai duduk. Kapan-kapan bakal kesini lagi buat refreshing</p>
                            </div>

                        </div>
                        <div className='w-full h-0.5 mb-4 bg-gray-300'></div>
                        <div className='w-full h-full sm:h-36 flex mb-4'>
                            <div className='flex w-4/12 h-full'>
                                <div>
                                    <img className='' src={ppReview} alt="" />
                                </div>
                                <div className='flex flex-col pl-1 sm:pl-0 sm:mt-2'>
                                    <img className='w-20' src={starKiri} alt="" />
                                    <h3 className='text-sm font-medium'>Yurasara</h3>
                                    <h6 className='text-xs font-thin'>2 Maret 2023</h6>
                                </div>
                            </div>
                            <div className='flex flex-col w-8/12 ml-4  h-full'>
                                <h3 className='font-semibold text-sm sm:text-lg'>cakep buat foto-foto</h3>
                                <p className='text-xs sm:text-base font-thin text-justify'>Dikasih tau sama temen katanya di sini bagus buat foto-foto eh ternyata bener , baguss apalagi enak banget daerah rumputnya luas cocok buat santai-santai</p>
                            </div>

                        </div>
                        <div className='w-full h-0.5 mb-4 bg-gray-300'></div>
                    </div>
                </div>
                <div className='flex justify-around items-center w-full h-16 sm:h-24 rounded-full mt-4 bg-custom-400'>
                    <div className='sm:w-1/12'>
                        <img className='mx-2 sm:mx-6 h-10 w-10 sm:w-3/6 hover:cursor-pointer' src={camera} alt="" />
                    </div>
                    <div className='text-gray-400 font-light text-xs sm:text-2xl z-10 w-8/12 ml-4 sm:ml-0 sm:w-7/12'>
                        <input type="text" id="name" placeholder='Bagikan pengalamanmu' name="name" className='sm:px-8 h-16 sm:h-24 bg-custom-400 w-full' />
                    </div>
                    <div className='flex w-3/12 sm:w-4/12 items-center'>
                        <div className='sm:flex h-full hidden items-center'>
                            <img className='hover:cursor-pointer' src={star} alt="" />
                            <img className='hover:cursor-pointer' src={star} alt="" />
                            <img className='hover:cursor-pointer' src={star} alt="" />
                            <img className='hover:cursor-pointer' src={star} alt="" />
                            <img className='hover:cursor-pointer' src={star} alt="" />
                        </div>
                        <button className='sm:ml-12 sm:px-12 px-3 py-1 sm:py-2 mr-4 sm:mx-5 bg-custom-200 hover:bg-green-50 rounded-3xl font-semibold text-base sm:text-lg text-white hover:text-black'>kirim</button>
                    </div>
                </div>
            </section>

            <section id='kunjungan' className='mx-8 sm:mx-16 mt-14 my-6 h-full font-sans'>
                <h3 className='font-medium text-xl sm:text-2xl'>Kunjungi destinasi lainnya </h3>
                <div className='px-2 sm:px-6'>
                    <Slider className='w-full py-12 mb-12 ' {...settings}>
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

            <section id='tips' className='mt-14 my-6 mb-12 h-full font-sans'>
                <h3 className='font-medium text-xl sm:text-2xl mx-8 sm:mx-16'>Tips berwisata ke Malang</h3>
                <div className='py-6'>
                    <img className='w-full' src={tipsMalang} alt="" />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default TuguMalang