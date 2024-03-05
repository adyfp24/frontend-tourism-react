import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navigateTo = (path) => {
        // Menutup dropdown ketika tautan diklik
        setIsDropdownOpen(false);

        // Menggulir ke bagian atas halaman
        window.scrollTo(0, 0);

        // Menggunakan navigate untuk berpindah ke rute yang diinginkan
        navigate(path);
    };

    return (
        <div className="flex flex-wrap">
            <section className="relative mx-auto">
                <nav className="fixed top-0 left-0 z-50 flex justify-between bg-custom-100 text-black w-screen">
                    <div className="px-5 lg:px-12 py-4 flex w-full justify-between items-center">
                        <Link to="/" className="text-xl font-sans font-semibold font-heading">
                            MalangKuy
                        </Link>
                        <div className="hidden md:flex space-x-5 items-center">
                            <ul className="hidden md:flex mx-auto font-light font-sans font-heading space-x-8">
                                <li><button onClick={() => navigateTo('/')}>Beranda</button></li>
                                <li><button onClick={() => navigateTo('/about')}>Tentang</button></li>
                                <li><button onClick={() => navigateTo('/destinasi')}>Destinasi</button></li>
                                <li><button onClick={() => navigateTo('/blog')}>Blog</button></li>
                                <li><button onClick={() => navigateTo('/auth')} className="bg-custom-200 text-white font-sans font-normal px-8 py-2 rounded-2xl hover:bg-white hover:text-black">Login</button></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={toggleDropdown}>
                        <a className="navbar-burger self-center flex items-center  mr-4 md:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </button>
                    {isDropdownOpen && (
                        <ul className="animate__animated animate__fadeInDown absolute shadow-xl mx-4 w-2/5 rounded-2xl top-full right-0 z-50 text-black md:hidden flex flex-col p-5 list-none bg-white">
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/')}>Beranda</button>
                            </li>
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/about')}>Tentang</button>
                            </li>
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/destinasi')}>Destinasi</button>
                            </li>
                            <li className="mb-2">
                                <button onClick={() => navigateTo('/blog')}>Blog</button>
                            </li>
                            <li>
                                <button className="text-white border px-4 bg-custom-200 hover:bg-custom-300 rounded-md" onClick={() => navigateTo('/auth')}>Login</button>
                            </li>
                        </ul>
                    )}
                </nav>
            </section>
        </div>
    );
}

export default Navbar;
