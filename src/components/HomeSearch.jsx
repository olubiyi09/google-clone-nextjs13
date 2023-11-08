"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { BsMicFill } from "react-icons/bs"

const HomeSearch = () => {
    const router = useRouter()
    const [input, setInput] = useState("")
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true)
        const response = await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json()).then((data) => data[0])

        if (!response) return
        router.push(`/search/web?searchTerm=${response}`)
        setRandomSearchLoading(false)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
                <AiOutlineSearch onClick={handleSubmit} className='text-xl text-gray-500 mr-3 cursor-pointer' />

                <input type="text" className="flex-grow focus:outline-none" onChange={(e) => setInput(e.target.value)} value={input} />

                <BsMicFill className='text-lg' />
            </form>

            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
                <button onClick={handleSubmit} className='btn'>Google Search</button>
                <button disabled={randomSearchLoading} onClick={randomSearch} className='btn flex items-center justify-center disabled:opacity-80'>
                    {randomSearchLoading ? <img src="spinner.svg" alt='Loading...' className='h-6 text-center' /> : ("I am feeling lucky")}
                </button>
            </div>
        </>
    )
}

export default HomeSearch