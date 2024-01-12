"use client"
import { useRef } from 'react';
import Card from './Card';
import { useInView } from 'framer-motion';
import design from "../assets/ux-picture.svg"
import dev from "../assets/dev-picture.svg"
import marketing from "../assets/marketing-picture.svg"
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
      <h1 className="text-5xl text-yellow-200 font-bold">Our Expertise</h1>
      <p className='max-w-md px-4 text-gris-400 text-center'>We specialize in creating great quality designs, and our team can prove it!</p>
    </div>
        <div className="flex justify-between">
          {servicesData.map((item, idx) => (
            <Card key={`services__item-${idx}`} {...item} isInView={isInView} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
