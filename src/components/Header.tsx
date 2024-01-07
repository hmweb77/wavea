"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegWindowClose } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import Logo from "../assets/logo.svg"

export default function Header() {
    const [navBar, setNavBar] = useState(false);



    return (
        <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    {/* LOGO */}
                    <Link href="/">
                        <Image src={Logo} alt='logo'
                            width={70}
                            height={70}
                        />
                    </Link>
                    {/* HAMBURGER BUTTON FOR MOBILE */}
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavBar(!navBar)}
                        >
                            {navBar ? (
                                <FaRegWindowClose width={30} height={30} />
                            ) : (
                                <FaBars
                                    width={30}
                                    height={30}
                                    className="focus:border-none active:border-none"
                                />

                            )}
                        </button>
                    </div>
                </div>


                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navBar ? 'p-12 md:p-0 block' : 'hidden'
                        }`}
                >

                    <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                        <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-500 md:hover:text-blue-500 md:hover:bg-transparent">
                            <Link href="#about" onClick={() => setNavBar(!navBar)}>
                                About
                            </Link>
                        </li>
                        <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-500 md:hover:text-blue-500 md:hover:bg-transparent">
                            <Link href="#blog" onClick={() => setNavBar(!navBar)}>
                                Blogs
                            </Link>
                        </li>
                        <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-500 md:hover:text-blue-500 md:hover:bg-transparent">
                            <Link href="#contact" onClick={() => setNavBar(!navBar)}>
                                Contact
                            </Link>
                        </li>
                        <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-500  border-blue-500 md:hover:text-blue-500 md:hover:bg-transparent">
                            <Link href="#projects" onClick={() => setNavBar(!navBar)}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
