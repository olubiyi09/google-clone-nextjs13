import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Line } from "react-icons/ri"
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

const SearchHeader = () => {
    return (
        <header className='sticky top-0 bg-white'>
            <div className="flex w-full p-8 items-center justify-between ">
                <Link href="/">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                        width="110"
                        height="10"
                        alt='logo'
                    />
                </Link>
                <div className="flex-1">
                    <SearchBox />
                </div>
                <div className="hidden md:inline-flex space-x-2">
                    <RiSettings3Line className="header-icon" />
                    <TbGridDots className="header-icon" />
                </div>
                <button className="bg-blue-500 text-white py-2 px-6 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2 hidden sm:inline-flex">Sign in</button>
            </div>
            <SearchHeaderOptions />
        </header>
    )
}

export default SearchHeader