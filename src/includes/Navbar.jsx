import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toogleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <div className="flex flex-wrap">
            <section className="relative mx-auto">
                <nav className="fixed top-0 left-0 z-50 flex justify-between bg-custom-100 text-black w-screen">
                    <div className="px-5 lg:px-12 py-4 flex w-full justify-between items-center">
                        <a className="text-xl font-sans font-semibold font-heading" href="#">
                            MalangKuy
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

                                <Link to='/auth'>
                                    <li><a className="bg-custom-200 text-white font-sans font-normal px-8 py-2 rounded-2xl hover:bg-white hover:text-black" href="#">Login</a></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <button onClick={toogleDropdown}>
                        <a className="navbar-burger self-center flex items-center  mr-4 md:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </button>
                    {isDropdownOpen && (
                        <ul className="animate__animated animate__fadeInDown absolute shadow-xl mx-4 w-2/5 rounded-2xl top-full right-0 z-50 text-black md:hidden flex flex-col p-5 list-none bg-white">
                            <li className="mb-2">
                                <Link to="/" className="hover:text-custom-200">Beranda</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="hover:text-custom-200">Tentang</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/destinasi" className="hover:text-custom-200">Destinasi</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blog" className="hover:text-custom-200">Blog</Link>
                            </li>
                            <li>
                                <button className="text-white border px-4 bg-custom-200 hover:bg-custom-300 rounded-md">
                                    <Link to="/auth">Login</Link>
                                </button>
                            </li>
                        </ul>
                    )}
                </nav>

            </section>
        </div>
    )
}

export default Navbar