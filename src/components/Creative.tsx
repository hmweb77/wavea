import React from 'react'
import Image from 'next/image'
import Mobile from "../assets/mobile-picture.svg"
import backG from "../assets/wave-haikei.svg"
export default function Creative() {

  //  const creativeBackgroundStyle = {
  //   backgroundImage: `url(${backG})`,
  //   backgroundSize: 'cover', // Adjust as needed
  //   backgroundPosition: 'center', // Adjust as needed
  //   display: 'inline' // To apply background properly
  // };
  return (
    <div  className="flex flex-col items-center justify-center text-center md:flex-row p-3 bg-waves-pattern">
      <h1 className="text-5xl  md:text-7xl text-black font-bold ">
        We make <span  className="relative text-blue-700 mb">creative </span>
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
