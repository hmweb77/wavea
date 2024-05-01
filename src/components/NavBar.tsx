"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from "../assets/Logo_Wavea.svg"

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="outline-none mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="17" viewBox="0 0 36 17" fill="none">
                                    <line y1="0.5" x2="36" y2="0.5" stroke="black" />
                                    <line y1="8.5" x2="36" y2="8.5" stroke="black" />
                                    <line y1="16.5" x2="36" y2="16.5" stroke="black" />
                                </svg>
                            </button>
                        </div>
                        {/* Logo */}
                        <div>
                           <Image src={Logo} alt="Logo"  className="w-logo-mobile h-logo-mobile md:w-logo-desktop md:h-logo-desktop"  />
                        </div>
                    <div className="flex space-x-7">
                        {/* Primary Nav Items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</Link>
                            <Link href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Services</Link>
                            <Link href="/projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Projects</Link>
                            <Link href="/faq" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">FAQ</Link>
                        </div>
                    </div>
                    {/* Contact Us Button */}
                    <div className=" md:block">
                        <Link href="/contact" className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-500 transition duration-300">Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <Link href="/" className="block py-2 text-sm text-gray-700 hover:bg-gray-50">Home</Link>
                <Link href="/services" className="block py-2 text-sm text-gray-700 hover:bg-gray-50">Services</Link>
                <Link href="/projects" className="block py-2 text-sm text-gray-700 hover:bg-gray-50">Projects</Link>
                <Link href="/faq" className="block py-2 text-sm text-gray-700 hover:bg-gray-50">FAQ</Link>

            </div>
        </nav>
    );
}
