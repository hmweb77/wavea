import React from 'react'
import Image from 'next/image'
import web from "../assets/Development.svg"
import design from "../assets/UX.svg"
import marketing from "../assets/Guarantee.svg"

export default function Services() {
    return (

        <section className="container mx-auto text-center">
            <div className='inline-flex flex-col items-center gap-4'>
          <h2 className="md:text-6xl text-5xl font-bold leading-130 font-montserrat text-yellow-100 ">
            our services
          </h2>
          <p className="text-black-200 font-montserrat leading-170 h-106 text-base md:text-2xl ">
            we specialize in creating high-quality designs, and our team can prove it!
          </p>
            </div>
  
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col items-center  px-2">
              <Image src={web} alt="logo" width={126} height={126} />
              <h3 className="font-montserrat text-2xl text-black-100 leading-130 font-semibold my-4">UI/UX DESIGN</h3>
              <p className="font-montserrat text-black-200 text-xl leading-170 ">
                We will create a design for you that is consistent, functional, effective, meets current standards, and is aesthetically pleasing for the user.
              </p>
            </div>  
            <div className="flex flex-col items-center mt-5  px-2">
            <Image src={design} alt="logo" width={126} height={126} />
              <h3 className="font-montserrat text-2xl text-black-100 leading-130 font-semibold my-4">WEBSITES</h3>
              <p className=" font-montserrat text-black-200 text-xl leading-170 ">
                Build your website and expand your online presence. We will ensure it looks great, operates quickly, and performs well with a seamless user experience.
              </p>
            </div>     
            <div className="flex flex-col items-center mt-5 px-2">
            <Image src={marketing} alt="logo" width={126} height={126} className='w-300 h-120' />
              <h3 className="font-montserrat text-2xl text-black-100 leading-130 font-semibold my-4">MARKETING</h3>
              <p className="font-montserrat text-black-200 text-xl leading-170 ">
                Our strategy ensures your brand growth. Our approach guarantees a standout, fast website that boosts your business and delights users.
              </p>
            </div>
          </div>
 
      </section>
    );
  }
  