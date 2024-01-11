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
        color:"blue-700",
        title: "Websites",
        description: "Empower your business with a custom, cutting-edge website.",
    },
    {
        image: marketing,
        color:"blue-800",
        title: "Creative marketing",
        description: "Aspects of creative marketing include social media, artwork, and design.",
    },
    {
        image: design,
        color:"blue-300",
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
        <div className="services__top-content text-center mb-8">
          <h6 className="subtitle">Our Services</h6>
         
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
