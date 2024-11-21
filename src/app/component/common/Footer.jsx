import { Facebook, Instagram, Twitter, Youtube, Linkedin, Send, Phone, Mail } from 'lucide-react';
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="flex justify-center bg-gray-900 py-10 style={{ background: 'linear-gradient(90deg, rgba(31,65,209,1) 35%, rgba(0,55,148,1) 100%)' }}">
                <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-5 gap-6 lg:space-x-5 lg:max-w-screen-lg">
                    <div className="text-left mb-6 ">
                        <Image
                            src="/bhartilogo.jpg"
                            alt="Bharti Group Logo"
                            width={160}
                            height={64}
                            className="mx-auto lg:mx-0 "
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-white">Address</h2>
                        <p className="text-gray-300">
                            <span className="font-semibold">R Bharti Enterprises: No 4130, 4th Floor</span><br />
                            Marvel Fuego, Near Amanora Mall,<br />
                            Opp WeWork/Seasons Mall,<br />
                            Magarpatta, Pune 411036.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-white">Our Services</h2>
                        <ul className="text-gray-300">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="/TermsAndCondition" className="hover:text-white">Terms And Conditions</a></li>
                            <li><a href="/RefundPolicy" className="hover:text-white">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-white ">Get In Touch</h2>
                        <p className="text-gray-300 flex items-center cursor-pointer hover:text-white">
                            <Phone className="w-5 h-5 mr-2" />
                            07057101010
                        </p>
                        <p className="text-gray-300 mt-2 max-w-xs break-words cursor-pointer flex items-center hover:text-white">
                            <Mail className="w-5 h-5 mr-2 inline-block" />
                            Email:support@bhartisharemarket.com
                        </p>
                        <p className="text-gray-300 mt-2 max-w-xs break-words cursor-pointer flex items-center hover:text-white">
                            <Send className="w-5 h-5 mr-2 inline-block" />
                            CIN no:U74999PN2021PLC199706
                        </p>

                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-white">Follow Us On</h2>
                        <div className="flex space-x-4 text-gray-300">
                            <a href="#" className="hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white">
                                <Send className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-600 pt-4 text-gray-400 text-sm">
                &copy; Copyright 2024. All Rights Reserved By <a href="#" className="text-blue-400 hover:text-white">Bharti SoftTech Pvt. Ltd.</a>
            </div>
            <marquee className="text-white bg-black p-2 mt-4 font-bold">
                DISCLAIMER : This is an educational website. We are not SEBI-registered investment advisors. There are no assured returns in the stock market. Do not fall prey to any assured returns schemes by any imposter claiming to be our representative.
            </marquee>
        </footer>

    )
}

