import React from 'react'
import Navbar from '../../includes/Navbar'
import Footer from '../../includes/Footer'
import jatimparkImg from "../../assets/images/jatimpark/jatimparkImg.png"
import teater4d from "../../assets/images/jatimpark/teater4d.png"
import adrenalin from "../../assets/images/jatimpark/adrenalin.png"
import dino from "../../assets/images/jatimpark/dino.png"
import tematik from "../../assets/images/jatimpark/tematik.png"
import galeri from "../../assets/images/jatimpark/galeri.png"
import zoo from "../../assets/images/jatimpark/zoo.png"
import coaster from "../../assets/images/jatimpark/coaster.png"
import museum from "../../assets/images/jatimpark/museum.png"
import makanhewan from "../../assets/images/jatimpark/makanhewan.png"
import outbond from "../../assets/images/jatimpark/outbond.png"
import replika from "../../assets/images/jatimpark/replika.png"
import atraksi from "../../assets/images/jatimpark/atraksi.png"
import map from "../../assets/images/jatimpark/map.png"
import caution from "../../assets/images/jatimpark/caution.png"
import oleh from "../../assets/images/jatimpark/oleh.png"
import putu from "../../assets/images/jatimpark/putu.png"
import tempe from "../../assets/images/jatimpark/tempe.png"
import star from "../../assets/images/jatimpark/star.png"
import starlist from "../../assets/images/jatimpark/starlist.png"
import camera from "../../assets/images/jatimpark/camera.png"
import starstroke from "../../assets/images/jatimpark/starstroke.png"
import angkot from "../../assets/images/jatimpark/angkot.png"
import tugulain from "../../assets/images/jatimpark/tugulain.png"
import coban from "../../assets/images/jatimpark/coban.png"
import pp1 from "../../assets/images/jatimpark/pp1.png"
import pp2 from "../../assets/images/jatimpark/pp2.png"
import pp3 from "../../assets/images/jatimpark/pp3.png"
import tipsMalang from "../../assets/images/jatimpark/tipsMalang.png"
import cuaca1 from "../../assets/images/jatimpark/cuaca1.png"
import cuaca2 from "../../assets/images/jatimpark/cuaca2.png"
import starsingle from "../../assets/images/jatimpark/starsingle.png"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function Jatimpark() {
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
                      <h1 className='tracking-wider'>JATIM</h1>
                      <h1 className='tracking-wider'>PARK</h1>
                  </div>
                  <div className='font-thin text-xl ml-1 mt-4 text-justify sm:mt-10'>
                      <p className=''>
                      Jawa Timur Park adalah sebuah tempat rekreasi dan taman belajar masa kini yang menawarkan permainan,pengetahuan hingga hiburan dan menjadi salah satu icon wisata Jawa Timur.Jatim Park terbagi menjadi tiga bagian, yakni Jatim Park 1, Jatim Park 2, dan Jatim Park 3. Masing-masing mempunyai wahana yang berbeda.
                      </p>
                  </div>
              </div>
              <div className='flex justify-end w-full sm:w-1/2 sm:px-0'>
                  <img className='animate__animated animate__fadeInRight' src={jatimparkImg} alt="" />
              </div>
          </section>

          <section id='content-section' className='mx-8 sm:mx-16 my-3 sm:my-6 font-sans'>
              <h3 className='font-medium text-xl sm:text-2xl'>Apa saja di Jatim Park?</h3>
              <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
                  <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-72 w-full'>
                              <img className='w-full max-h-full' src={adrenalin} alt="" />
                          </div>
                          <div className='mb-16 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Wahana Adrenalin</h1>
                              <p className='font-thin'>Wahana permainan di Jatim Park tidak perlu diragukan variasinya, lebih dari 50 permainan bisa kamu coba</p>
                          </div>
                      </div>
                  </div>
                  <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-40 w-full'>
                              <img className='w-full max-h-full' src={teater4d} alt="" />
                          </div>
                          <div className='mb-6 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Teater 4D</h1>
                              <p className='font-thin'>Mengusung inovasi yang berbeda, Jatim Park menghadirkan teater 4D dengan sensani menonton yang berbeda </p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-72 w-full'>
                              <img className='w-full max-h-full' src={zoo} alt="" />
                          </div>

                          <div className='mb-16 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Batu Secret Zoo</h1>
                              <p className='font-thin'>Batu Secret Zoo adalah salah satu bagian yang banyak dikunjungi oleh wisatawan. Berbagai hewan mulai dari hewan darat, air, maupun keduanya bisa kamu kunjungi di Batu Secret Zoo</p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-72 w-full'>
                              <img className='w-full max-h-full' src={tematik} alt="" />
                          </div>
                          <div className='mb-16 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Taman Tematik</h1>
                              <p className='font-thin'>Jatim Park menghadirkan taman tematik yang beragam, seperti taman air, taman kupu-kupu, dan masih banyak lagi yang sangat cocok untuk menambah wawasan</p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-40 w-full'>
                              <img className='w-full max-h-full' src={galeri} alt="" />
                          </div>
                          <div className='mb-6 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Galeri Etnik Nusantara</h1>
                              <p className='font-thin'>Galeri etnik nusantara mengenalkan berbagai suku, adat, baju khas, serta keunikan lainnya di Indonesia</p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col '>
                          <div className='h-full sm:h-40 w-full'>
                              <img className='w-full max-h-full' src={dino} alt="" />
                          </div>
                          <div className='mb-6 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Museum Dino</h1>
                              <p className='font-thin'>Tak lengkap jika belum berkunjung ke Museum Dino yang berisi berbagai replika spesies dinosaurus yang uniknya bisa bergerak dan mengeluarkan suara</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id='activity' className='mx-8 sm:mx-16 my-3 sm:my-6 font-sans'>
              <h3 className='font-medium text-xl sm:text-2xl'>Rekomendasi aktivitas di Gunung Semeru</h3>
              <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
                  <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-72 w-full'>
                              <img className='w-full max-h-full' src={museum} alt="" />
                          </div>
                          <div className='mb-16 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Kunjungi Museum</h1>
                              <p className='font-thin'>Dengan bervariasinya museum di Jatim Park, sayang bila kamu tak mengunjunginya. Mengenal lebih dalam tentang berbagai hal di dunia dengan cara yang menyenangkan</p>
                          </div>
                      </div>
                  </div>
                  <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-40 w-full'>
                              <img className='w-full max-h-full' src={coaster} alt="" />
                          </div>
                          <div className='mb-6 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Menikmati Permainan</h1>
                              <p className='font-thin'>Dengan total permainan lebih dari 50 tentu saja menikmati permainan adalah hal yang mengasyikkan </p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-72 w-full'>
                              <img className='w-full max-h-full' src={atraksi} alt="" />
                          </div>
                          <div className='mb-16 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Menonton Atraksi Hewan</h1>
                              <p className='font-thin'>Di sini kamu akan dihibur dengan atraksi dan tingkah lucu hewan-hewan yang ada di Batu Secret Zoo</p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-72 w-full'>
                              <img className='w-full max-h-full' src={outbond} alt="" />
                          </div>
                          <div className='mb-16 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Water Outbond</h1>
                              <p className='font-thin'>Tak kalah asyik dengan permainan adrenalin yang disediakan, Jatim Park melengkapinya dengan menambahkan permainan air yang tentunya seru</p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-40 w-full'>
                              <img className='w-full max-h-full' src={replika} alt="" />
                          </div>
                          <div className='mb-6 mx-4 hidden sm:block'>
                              <h1 className='font-bold my-4'>Kunjungi Replikas Dinosaurus</h1>
                              <p className='font-thin'>Mempelajari tentang sejarah dinosaurus, mengenal lebih dalam berbagai spesiesnya sangat bagus untuk menambah pengetahuan</p>
                          </div>
                      </div>
                  </div>

                  <div className="sm:col-span-1 shadow-md rounded-xl bg-custom-300">
                      <div className='flex flex-col'>
                          <div className='h-full sm:h-40 w-full'>
                              <img className='w-full max-h-full' src={makanhewan} alt="" />
                          </div>
                          <div className='mb-6 mx-4 hidden sm:block'>
                              <h1 className='font-bold py-4'>Memberi Makan Hewan</h1>
                              <p className='font-thin'>Memberi makan hewan adalah salah satu aktivitas yang bisa kamu lakukan ketika mengunjungi Batu Secret Zoo yang tentunya hal ini sudah diawasi oleh petugas </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id='location' className='mx-8 sm:mx-16 py-6 font-sans'>
              <div className='flex w-full'>
                  <div className='flex w-2/3 mr-2 sm:mr-6 rounded-lg'>
                      <img src={map} alt="" />
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
              <div className='flex w-full bg-custom-300 h-full sm:h-28 mt-12 rounded-3xl'>
                  <div className='w-3/12 sm:w-2/12 flex justify-center items-center'>
                      <img className='w-12 h-12' src={caution} alt="" />
                  </div>
                  <div className='w-9/12 sm:w-10/12 text-sm sm:text-base font-semibold sm:font-bold font-sans flex justify-start items-center'>
                      <p className='mr-6 py-4 sm:py-6 text-justify'>Dilarang membawa makanan dan minuman dari luar dan pastikan anda sudah mendapatkan minimal vaksin pertama</p>
                  </div>
              </div>
          </section>

          <section id='umkm' className='mx-8 sm:mx-16 my-6 h-full font-sans'>
              <h3 className='font-medium text-xl sm:text-2xl'>Support UMKM sekitar </h3>
              <div className='px-2 sm:px-6'>
                  <Slider className='w-full py-12 sm:mb-12 px-2' {...settings}>
                      <div className=''>
                          <img className='w-5/6' src={oleh} alt="" />
                      </div>
                      <div className=''>
                          <img className='w-5/6' src={putu} alt="" />
                      </div>
                      <div className=''>
                          <img className='w-5/6' src={tempe} alt="" />
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
                              <img className='w-2/3 sm:w-full' src={star} alt="" />
                          </div>
                      </div>
                      <div className=''>
                          <div className='flex justify-end sm:'>
                              <img className='w-2/3 sm:w-full h-full' src={starlist} alt="" />
                          </div>
                      </div>
                  </div>
                  <div className='flex w-full flex-col'>
                      <div className='w-full h-full sm:h-36 flex mb-4'>
                          <div className='flex w-4/12 h-full'>
                              <div >
                                  <img className='' src={pp1} alt="" />
                              </div>
                              <div className='flex flex-col pl-1 sm:pl-0 sm:mt-2'>
                                  <img className='w-20' src={star} alt="" />
                                  <h3 className='text-sm font-medium'>Yurasara</h3>
                                  <h6 className='text-xs font-thin'>2 Maret 2023</h6>
                              </div>
                          </div>
                          <div className='flex flex-col w-8/12 ml-4  h-full'>
                              <h3 className='font-semibold text-sm sm:text-lg'>Seruu</h3>
                              <p className='text-xs sm:text-base font-thin text-justify'>Seruu banget. Udah dari lama pengen kesini bareng temen-temen akhirnya kesampean. Mulai ntoba roller coasternya nampoll banget terus nyoba ke museum dino baguss juga agak kaget ternyata replikanya bisa gerak</p>
                          </div>

                      </div>
                      <div className='w-full h-0.5 mb-4 bg-gray-300'></div>
                      <div className='w-full h-full sm:h-36 flex mb-4'>
                          <div className='flex w-4/12 h-full'>
                              <div >
                                  <img className='' src={pp2} alt="" />
                              </div>
                              <div className='flex flex-col pl-1 sm:pl-0 sm:mt-2'>
                                  <img className='w-20' src={star} alt="" />
                                  <h3 className='text-sm font-medium'>Bimo12</h3>
                                  <h6 className='text-xs font-thin'>2 April 2023</h6>
                              </div>
                          </div>
                          <div className='flex flex-col w-8/12 ml-4  h-full'>
                              <h3 className='font-semibold text-sm sm:text-lg'>Pasti kesini kalo liburan</h3>
                              <p className='text-xs sm:text-base font-thin text-justify'>Udah sering banget kesini karena tiap libura pasti ditagih kesini sama keluarga. enak tempatnya, bagus, rapi ga cuma buat anak-anak aja tapi orang tua juga enjoy</p>
                          </div>

                      </div>
                      <div className='w-full h-0.5 mb-4 bg-gray-300'></div>
                      <div className='w-full h-full sm:h-36 flex mb-4'>
                          <div className='flex w-4/12 h-full'>
                              <div>
                                  <img className='' src={pp3} alt="" />
                              </div>
                              <div className='flex flex-col pl-1 sm:pl-0 sm:mt-2'>
                                  <img className='w-20' src={star} alt="" />
                                  <h3 className='text-sm font-medium'>Rani5</h3>
                                  <h6 className='text-xs font-thin'>2 Oktober 2021</h6>
                              </div>
                          </div>
                          <div className='flex flex-col w-8/12 ml-4  h-full'>
                              <h3 className='font-semibold text-sm sm:text-lg'>best banget</h3>
                              <p className='text-xs sm:text-base font-thin text-justify'>Suka bangett sama tempatnya, tahu gitu dari dulu kesini aja tiap liburan yahh walau tiketnya agak mahal tapi percaya dehh worth it bangett ga bakal nyesel liburan kesini</p>
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
                          <img className='hover:cursor-pointer' src={starsingle} alt="" />
                          <img className='hover:cursor-pointer' src={starsingle} alt="" />
                          <img className='hover:cursor-pointer' src={starsingle} alt="" />
                          <img className='hover:cursor-pointer' src={starsingle} alt="" />
                          <img className='hover:cursor-pointer' src={starsingle} alt="" />
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
                        <a href="./museum-angkut">
                          <img className='w-5/6' src={angkot} alt="" />
                        </a>
                      </div>
                      <div className=''>
                        <a href="./tugu-malang">
                          <img className='w-5/6' src={tugulain} alt="" />
                        </a>
                      </div>
                      <div className=''>
                        <a href="./coban-rondo">
                          <img className='w-5/6' src={coban} alt="" />
                        </a>
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

export default Jatimpark