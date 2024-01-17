import React from 'react'
import Image from 'next/image'
import Mobile from "../assets/mobile-picture.svg"
import Waves from "../assets/waves.svg"
export default function Creative() {
  return (
    <div className="flex flex-col items-center justify-center text-center md:flex-row p-3 ">
      <h1 className="text-5xl md:text-7xl text-black font-bold">
        We make <span className='relative text-blue-700 mb'>creative </span>
        {/* <Image
          className="absolute right-1/4 "
          src={Waves}
          alt="Creative Decoration"
        /> */}
      things every day
      </h1>
      <Image
        src={Mobile}
        alt='mobile'
        className="mt-4 md:mt-0 md:ml-4"
      />
    </div>
  )
}
