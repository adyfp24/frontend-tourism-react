import React from 'react'
import ig from '../assets/images/instagram.png'
import twit from '../assets/images/twitter.png'
import fb from '../assets/images/fb.png'
import jaka from '../assets/images/Chatbot/jaka.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer id='tips' className='mt-14 h-full font-sans'>
        <Link to='/chatbot'>
          <img className='w-20 sm:w-24 fixed right-4 sm:right-8 bottom-4 sm:bottom-8 hover:scale-110' src={jaka} alt="" />
        </Link>
        <div className='text-white h-72 px-8 sm:px-16 pt-14 flex justify-between w-full bg-custom-500'>
          <div className='font-bold hidden sm:block'>MalangKuy</div>
          <div>
            <h1 className='font-bold pb-4'>Malang</h1>
            <ul className='font-extralight text-xs sm:text-base'>
              <li className='pb-2'>Tentang</li>
              <li className='pb-2'>Destinasi</li>
              <li className='pb-2'>Blog</li>
              <li className='pb-2'>FAQ</li>
            </ul>
          </div>
          <div className='ml-11 sm:ml-0'>
            <h1 className='font-bold pb-4'>Layanan</h1>
            <ul className='font-extralight text-xs sm:text-base'>
              <li className='pb-2'>Kontak Kami</li>
              <li className='pb-2'>Syarat dan Ketentuan</li>
              <li className='pb-2'>Keamanan Privasi</li>
              <li className='pb-2'>Peta</li>
            </ul>
          </div>
          <div className='ml-6 sm:ml-0'>
            <h1 className='font-bold pb-4 '>Media Sosial</h1>
            <ul className='flex'>
              <li className='hover:cursor-pointer'>
                <img className='' src={fb} alt="" />
              </li>
              <li className='pl-3 hover:cursor-pointer'>
                <img className='' src={twit} alt="" />
              </li>
              <li className='pl-3 pr-4 hover:cursor-pointer'>
                <img className='' src={ig} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full py-6 px-8 sm:px-16 font-thin sm:text-base text-xs text-white bg-emerald-950'>Copyright 2024 MalangKuy. All Rights Reserved</div>
      </footer>
    </div>
  )
}

export default Footer