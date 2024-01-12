import Image from 'next/image'
import React from 'react'
import design from "../assets/ux-picture.svg"
import dev from "../assets/dev-picture.svg"
import marketing from "../assets/marketing-picture.svg"



export default function Expertise() {
  return (
    <div>   
      <div className="flex flex-col items-center">
      <h1 className="text-5xl text-yellow-200 font-bold">Our Expertise</h1>
      <p className='max-w-md px-4 text-gris-400 text-center'>We specialize in creating great quality designs, and our team can prove it!</p>
    </div>
<section>
    <Image src={design} alt='design'/>
  <div className="text-gris-400 bg-white-200 p-8 text-center">
      <h1 className='text-black'>UX/UI Design</h1>
      <p className='text-gris-400'>UI/UX design focuses on creating a seamless and meaningful user experience.</p>
    </div>
    </section>
<section>
    <Image src={dev} alt='design'/>
    <div className="text-gris-400 bg-white-200 p-8 text-center">
    <h1 className='text-black'>Websites</h1>
      <p className='text-gris-400'>Empower your business with a custom, cutting-edge website.</p>
    </div>
    </section>
<section>
    <Image src={marketing} alt='design'/>
    <div className="text-gris-400 bg-white-200 p-8 text-center">
    <h1 className='text-black'>Creative marketing</h1>
      <p className='text-gris-400'>Aspects of creative marketing include social media, artwork, and design.</p>
    </div>
    </section>
    </div>
  )
}

