import React from 'react'
import Navbar from '../includes/Navbar'
import headImg from '../assets/images/blog/head-blog.png'
import avatar from '../assets/images/blog/Avatar.png'

function Blog() {
  return (
    <div className='bg-custom-100 h-full pb-60'>
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
    </div>
  )
}

export default Blog