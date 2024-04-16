"use client"
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import Logo from "../assets/logo.svg"
import Image from "next/image";


export default function NavBars() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/">
                    <Image src={Logo} alt='logo'
                        width={100}
                        height={100}
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem>
                    <Link className="text-gris-400 p-4 hover:text-blue-900 bg-no-repeat" href="#about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem  >
                    <Link className="text-gris-400 p-4 hover:text-blue-900 bg-no-repeat" href="#services"  >
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gris-400 p-4 hover:text-blue-900 bg-no-repeat" href="/">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-gris-400 p-4 hover:text-blue-900 bg-no-repeat" href="#faq">
                        FAQ
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className='text-gris-400 bg-yellow-200' href="#contact" >
                        Contact Us
                    </Button>
                </NavbarItem>
                {/* <NavbarMenu>
                    <NavbarMenuItem >
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="#about">
                            About
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="#services">
                            Services
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="#">
                            Projects
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="#faq">
                            FAQ
                        </Link>
                    </NavbarMenuItem>
                </NavbarMenu> */}
            </NavbarContent>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
                <NavbarMenu>
                    <NavbarMenuItem>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="/" onClick={closeMenu}>
                            About
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="/" onClick={closeMenu}>
                            Services
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="/" onClick={closeMenu}>
                            Projects
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="#faq" onClick={closeMenu}>
                            FAQ
                        </Link>
                        <Link className="text-gris-400 w-full m-2 py-4 hover:text-blue-900 bg-no-repeat" href="privacy" onClick={closeMenu}>
                            Policy
                        </Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            )}
        </Navbar>
    );
}
