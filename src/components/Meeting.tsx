import React from 'react'
import Image from 'next/image'

import Calendar from "../assets/calendar.svg"
import { FaArrowRight } from "react-icons/fa";

export default function Meeting() {
  return (
      <div className='bg-blue-400 py-10 mx-4 md:mx-8 lg:mx-16 xl:mx-32 flex items-center flex-col md:flex-row justify-around text-center rounded-lg'>
      <Image className='p-2 mx-10' src={Calendar} alt="calendar" />
      <h1 className='text-white-200 text-2xl pt-4 md:text-4xl mb-4 md:mb-8 '>Schedule a quick 15-30 minute meeting with our experts now </h1>
      <button className='bg-yellow-200 flex items-center px-4 md:px-12 mx-0 md:mx-16 md:mt-4 rounded-lg'>
        <a href='https://calendly.com/wavea2024/30min'>
        <span className='text-blue-400'>Book now </span>
        </a>
        <FaArrowRight className="text-blue-400 m-2" />
      </button>
    </div>
  )
}
