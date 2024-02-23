import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="flex flex-wrap">
            <section className="relative mx-auto">
                <nav className="flex justify-between bg-custom-100 text-black w-screen">
                    <div className="px-5 lg:px-12 py-4 flex w-full justify-between items-center">
                        <a className="text-xl font-sans font-semibold font-heading" href="#">
                            MalangKuy.id
                        </a>
                        <div className="hidden md:flex space-x-5 items-center">
                            <ul className="hidden md:flex mx-auto font-light font-sans font-heading space-x-8">
                                <Link to='/'>
                                    <li><a className="hover:text-custom-200" href="#">Beranda</a></li>
                                </Link>
                                <Link to='/about'>
                                    <li><a className="hover:text-custom-200" href="#">Tentang</a></li>
                                </Link>
                                <Link to='/destinasi'>
                                    <li><a className="hover:text-custom-200" href="#">Destinasi</a></li>
                                </Link>
                                <Link to='/blog'>
                                    <li><a className="hover:text-custom-200" href="#">Blog</a></li>
                                </Link>
                                <Link to='/FAQ'>
                                    <li><a className="hover:text-custom-200" href="#">FAQ</a></li>
                                </Link>
                                <Link to='/auth'>
                                    <li><a className="bg-custom-200 text-white font-sans font-normal px-8 py-2 rounded-2xl hover:bg-white hover:text-black" href="#">Login</a></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <a className="navbar-burger self-center mr-12 md:hidden" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </nav>

            </section>
        </div>
    )
}

export default Navbar