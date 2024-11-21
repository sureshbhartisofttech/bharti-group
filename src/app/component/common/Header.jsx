"use client"
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const scrollToContent = (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Determine the scroll position based on screen width
        const scrollPosition = window.innerWidth <= 768 ? 3500 : 2000; // 2000px for mobile, 3500px for desktop

        window.scrollTo({
            top: scrollPosition, // Scroll down to the determined position
            behavior: 'smooth' // Smooth scroll
        });

    };
    const scrollToCompany = (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Determine the scroll position based on screen width
        const scrollPosition = window.innerWidth <= 768 ? 7 : 750; // 750px for mobile, 7px for desktop

        window.scrollTo({
            top: scrollPosition, // Scroll down to the determined position
            behavior: 'smooth' // Smooth scroll
        });
    }
    return (
        <div className="sticky top-0 z-50 bg-[#fff] shadow">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between py-4 space-y-4 sm:flex-row sm:space-y-0">
                    <div className="">
                        <img src="/bhartilogo.jpg" alt="PEBISNIS ULUNG" className="h-16 w-40" />
                    </div>
                    <nav className="relative flex flex-col items-center sm:flex-row">
                        {/* Hamburger Icon */}
                        <button
                            className="sm:hidden p-2"
                            onClick={toggleMenu}
                        >
                            <span className="block w-6 h-1 bg-[#747582] mb-1"></span>
                            <span className="block w-6 h-1 bg-[#747582] mb-1"></span>
                            <span className="block w-6 h-1 bg-[#747582]"></span>
                        </button>
                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute w-[100vw] top-16 md:hidden -translate-x-[40%]  bg-white shadow-lg z-60 ">
                                <div className="flex flex-col items-center space-y-2 p-4">
                                    <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]">Home</Link>
                                    <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]" onClick={scrollToContent}>About Us</Link>
                                    <Link href="/" className="text-base text-[#747582] hover:text-[#0B4075]" onClick={scrollToCompany}>Company</Link>
                                    <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]">Blog</Link>
                                    <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]">Contact Us</Link>
                                    <a href="tel:07057101010">
                                        <button className="px-6 py-2 text-sm font-bold text-[#282c4b] bg-white border border-[#0B4075]/50 rounded-full hover:bg-[#593FFB]/10 transition-colors duration-300">
                                            Let's Talk
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )}


                        {/* Navigation Links for larger screens */}
                        <div className={`hidden sm:flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6`}>
                            <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]">Home</Link>
                            <Link href="" className="text-base text-[#747582] hover:text-[#0B4075]" onClick={scrollToContent}>About Us</Link>
                            <Link href="/" className="text-base text-[#747582] hover:text-[#0B4075]" onClick={scrollToCompany}>Company</Link>
                            <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]">Blog</Link>
                            <Link href="/#" className="text-base text-[#747582] hover:text-[#0B4075]">Contact Us</Link>
                            <a href="tel:07057101010">
                                <button className="px-6 py-2 text-sm font-bold text-[#282c4b] bg-white border border-[#0B4075]/50 rounded-full hover:bg-[#593FFB]/10 transition-colors duration-300">
                                    Let's Talk
                                </button>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;