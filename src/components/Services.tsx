"use client"
import { useRef } from 'react';
import Card from './Card';
import Image from 'next/image'
import { useInView } from 'framer-motion';
import design from "../assets/design (1).png"
import dev from "../assets/website (1).png"
import marketing from "../assets/marketing (1).png"

const servicesData = [

    {
        image: dev,
        color:"bg-blue-700",
        title: "Websites",
        description: "Empower your business with a custom, cutting-edge website.",
    },
    {
        image: marketing,
        color:"bg-blue-800",
        title: "Creative marketing",
        description: "Aspects of creative marketing include social media, artwork, and design.",
    },
    {
        image: design,
        color:"bg-blue-300",
        title: "UX/UI Design",
        description: "UI/UX design focuses on creating a seamless and meaningful user experience.",
    },
];

const Services = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" ref={ref}>
      <div className="container mx-auto">
      <div className="flex flex-col items-center">
      <h1 className="text-4xl text-yellow-200 font-bold my-4">Our Expertise</h1>
      <p className='max-w-md px-4 text-gris-400 text-center mb-8'>We specialize in creating great quality designs, and our team can prove it!</p>
    </div>
        <div className="flex flex-col lg:flex-row justify-between">

        <section className="flex flex-col items-center" style={{
            transform: isInView ? 'none' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
            transition: `all ${( 1)/2}s ease-out 0.2s`,
        }}>
            <div className="bg-blue-700 py-10 px-24">
                <Image width={200} height={150} src={dev} alt='logo' />
            </div>
            <div className="text-gris-400 bg-white-200 p-6 text-center">
                <h1 className='text-black'>Websites</h1>
                <p className='text-gris-400'>Empower your business with a custom, cutting-edge website.</p>
            </div>
        </section>
        <section className="flex flex-col items-center" style={{
            transform: isInView ? 'none' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
            transition: `all ${(2)/2}s ease-out 0.2s`,
        }}>
            <div className="bg-blue-800 py-10 px-24">
                <Image width={200} height={150} src={marketing} alt='logo' />
            </div>
            <div className="text-gris-400 bg-white-200 p-6 text-center">
                <h1 className='text-black'>Creative marketing</h1>
                <p className='text-gris-400'>Aspects of creative marketing include social media, artwork, and design.</p>
            </div>
        </section>
        <section className="flex flex-col items-center" style={{
            transform: isInView ? 'none' : 'translateY(100%)',
            opacity: isInView ? 1 : 0,
            transition: `all ${( 3)/2}s ease-out 0.2s`,
        }}>
            <div className="bg-blue-300 py-10 px-24">
                <Image width={200} height={150} src={design} alt='logo' />
            </div>
            <div className="text-gris-400 bg-white-200 p-6 text-center">
                <h1 className='text-black'>UX/UI Design</h1>
                <p className='text-gris-400'>UI/UX design focuses on creating a seamless and meaningful user experience.</p>
            </div>
        </section>
        </div>
      </div>
    </section>
  );
};

export default Services;
