"use client"

import React from 'react'
import './style.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const pathname = usePathname()
    return (
        <nav className='h-screen overflow-x-auto custom-scroll-bar '>
            <ul className='text-sub-text border-r border-r-[#d1cbcb] min-h-screen'>
                <Link href="/library">
                    <li className={`p-4 hover:text-black ${pathname === "/library" ? "text-black font-semibold" : "text-sub-text"}`}>Automatic News Feed</li>
                </Link>

                <Link href="/library/productdescription">
                    <li className={`p-4 hover:text-black ${pathname === "/library/productdescription" ? "text-black font-semibold" : "text-sub-text"}`}>Product List</li>
                </Link>

                <Link href="/library/slider">
                    <li className={`p-4 hover:text-black ${pathname === "/library/slider" ? "text-black font-semibold" : "text-sub-text"}`}>Slider</li>
                </Link>

           

                <Link href="/library/magnifier">
                    <li className={`p-4 hover:text-black ${pathname === "/library/magnifier" ? "text-black font-semibold" : "text-sub-text"}`}>Magnifier</li>
                </Link>

            </ul>
        </nav>
    )
}

export default SideBar
