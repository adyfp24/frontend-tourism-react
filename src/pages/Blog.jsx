import React from 'react'
import Navbar from '../includes/Navbar'
import headImg from '../assets/images/blog/head-blog.png'
import avatar from '../assets/images/blog/Avatar.png'
import semeruImg from '../assets/images/blog/semeru-2.png'
import padangBunga from '../assets/images/ororo ombo.png'
import campingImg from '../assets/images/camping.png'
import Footer from '../includes/Footer'

function Blog() {
  return (
    <div className='bg-custom-100 h-full'>
      <Navbar />
      <section id='head'>
        <div className='flex bg-custom-300 p-6 mx-16 mt-24 rounded-2xl'>
          <div className='flex flex-col  w-5/12 h-full'>
            <h3 className='font-light mt-3 mb-4'>baca 3 menit</h3>
            <p className='font-bold text-4xl mb-4'>Liburan? Museum <br />Angkut, yuk</p>
            <p className='font-light mb-4'>Museum Angkut adalah salah satu destinasi wisata yang menampilkan berbagai perkembangan transportasi dunia, cocok untuk menambah wawasan kamu!</p>
            <div>
              <button className='hover:bg-custom-200 hover:text-white bg-white rounded-3xl px-6 py-3'>Selengkapnya</button>
            </div>
            <div className='w-7/8 mr-8 my-6 h-0.5 bg-black'></div>
            <div className='flex'>
              <div className='max-w-1/2'>
                <img className='max-w-full' src={avatar} alt="" />
              </div>
              <div className='flex flex-col ml-4'>
                <h3 className='font-medium'>Rani</h3>
                <h6 className='font-light'>23 Oktober 2023</h6>
              </div>
            </div>
          </div>
          <div className='w-7/12 h-full'>
            <img className='w-full' src={headImg} alt="" />
          </div>
        </div>
      </section>

      <section id='blog-detail' className='mx-16 my-6 h-full font-sans'>
        <h3 className='font-medium text-2xl'>Sering dilihat </h3>
        <div className='flex w-full pt-6'>
          <div className='flex flex-col bg-custom-300 w-1/3 mr-6 rounded-2xl'>
            <div className='h-48'>
              <img className='max-h-full w-full' src={semeruImg} alt="" />
            </div>
            <div className='h-56 p-3'>
              <h6 className='font-extralight text-xs py-1'>baca 2 menit</h6>
              <h3 className='font-semibold text-base'>Mendaki Gunung Semeru Butuh Apa Saja?</h3>
              <h6 className='font-semibold text-sm pb-1'>By <span className='font-thin'>Andre</span></h6>
              <p className='font-thin text-sm py-1'>Mendaki Gunung tentu membutuhka persiapan yang matang untuk menghindari berbagai kemungkinan buruk saat melakukan petualan...</p>
              <h6 className='font-extralight text-xs text-gray-600'>22 Agustus 2021</h6>
            </div>
          </div>
          <div className='flex flex-col bg-custom-300 w-1/3 mr-6 rounded-2xl'>
            <div className='h-48'>
              <img className='' src={padangBunga} alt="" />
            </div>
            <div className='h-56 p-3'>
              <h6 className='font-extralight text-xs py-1'>baca 2 menit</h6>
              <h3 className='font-semibold text-base'>Penat? Ini 3 Rekomendasi Healing Di Malang</h3>
              <h6 className='font-semibold text-sm pb-1'>By <span className='font-thin'>Anna</span></h6>
              <p className='font-thin text-sm py-1'>Waktu liburan telah tiba, waktu yang cocok untuk melepas penat dari kesibukan sehari-hari dan Malang adalah tempat yang cocok untuk kamu...</p>
              <h6 className='font-extralight text-xs text-gray-600'>19 September 2022</h6>
            </div>
          </div>
          <div className='flex flex-col bg-custom-300 w-1/3 rounded-2xl'>
          <div className='h-48'>
              <img className='' src={campingImg} alt="" />
            </div>
            <div className='h-56 p-3'>
              <h6 className='font-extralight text-xs py-1'>baca 2 menit</h6>
              <h3 className='font-semibold text-base'>Pos-Pos Pendakian Gunung Semeru</h3>
              <h6 className='font-semibold text-sm pb-1'>By <span className='font-thin'>Toni</span></h6>
              <p className='font-thin text-sm py-1'>Bagi pendaki, menandai pemberhentian tiap pos adalah hal yang penting. Pos-pos ini berfungsi untuk menyediakan kawasan yang aman untuk...</p>
              <h6 className='font-extralight text-xs text-gray-600'>05 April 2021</h6>
            </div>
          </div>
        </div>
      </section>

      <section id='artikel' className='mx-16 my-6 h-full font-sans'>
        <h3 className='font-medium text-2xl'>Artikel Lainnya</h3>
        
      </section>

      <Footer />
    </div>
  )
}

export default Blog