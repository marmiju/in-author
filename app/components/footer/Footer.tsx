import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full bg-gray-800 py-10'>
            <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto grid grid-cols-4 gap-4 '>
                {/*
                first dive 
                incluse: tilte and description of footer and social icons
                */}
                <div className="col-span-4 lg:col-span-1 flex flex-col lg:items-start items-center  text-center lg:text-start  space-y-2">
                    <Image
                        className=" "
                        width={200}
                        src={logo}
                        alt="logo"
                    />
                    <p className="text-gray-200 mt-4">
                        The main objective of this blog is helping people by providing all kinds of traveling information.
                    </p>
                    {/* social Button */}
                    <div className='flex text-white text-3xl gap-4 flex-wrap'>
                        <button>
                            <FaFacebook />
                        </button>
                        <button>
                            <FaInstagram />
                        </button>
                        <button >
                            <FaTwitter />
                        </button>

                    </div>
                </div>

                {/* destination */}
                <div className='col-span-4 md:col-span-2 lg:col-span-1 flex flex-col lg:items-start items-center    space-y-2'>
                    <h3 className='text-white text-lg font-semibold mb-4'>Destinations</h3>
                    <ul className='text-gray-300 space-y-2 grid'>
                        <Link href="#" className='hover:text-yellow-500'>By Place</Link>
                        <Link href="#" className='hover:text-yellow-500'>By City</Link>
                        <Link href="#" className='hover:text-yellow-500'>By states</Link>
                    </ul>
                </div>

                {/* quick linkss */}
                <div className='col-span-4 md:col-span-2 lg:col-span-1 flex flex-col lg:items-start items-center   space-y-2'>
                    <h3 className='text-white text-lg font-semibold mb-4'>Quick Links</h3>
                    <ul className='text-gray-300 space-y-2 grid'>
                        <Link href="#" className='hover:text-yellow-500'>Home</Link>
                        <Link href="#" className='hover:text-yellow-500'>citys</Link>
                        <Link href="#" className='hover:text-yellow-500'>Places</Link>
                        <Link href="#" className='hover:text-yellow-500'>states</Link>
                        <Link href="#" className='hover:text-yellow-500'>About Us</Link>
                        <Link href="#" className='hover:text-yellow-500'>Contact</Link>
                    </ul>
                </div>

                {/* news later */}
                <div className='col-span-4  lg:col-span-1 flex flex-col items-center  text-center  space-y-2'>
                    <h3 className='text-white text-lg font-semibold mb-4'>Newsletter</h3>
                    <div className=''>
                        <p className='text-gray-300 mb-4'>Subscribe to our newsletter to get the latest updates.</p>
                        <div className='space-x-2 text-white'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded border border-gray-400 focus:outline-none focus:border-yellow-500"
                            />
                            <button className='bg-yellow-500 text-white px-4 py-2 rounded mt-2 hover:bg-yellow-600'>Subscribe</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Footer;