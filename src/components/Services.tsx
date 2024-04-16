"use client"


import Image from 'next/image'
import design from "../assets/ux-picture.svg"
import dev from "../assets/dev-picture.svg"
import marketing from "../assets/marketing-picture.svg"

const servicesData = [

    {
        image: design,
        color:"bg-blue-300",
        title: "UX/UI Design",
        description: "We will invent for you design that is consistent, functional, effective to use, meets actual standards, and aesthetically pleasing for the user.",
    },
    {
        image: dev,
        color:"bg-blue-700",
        title: "Website Development",
        description: "Build your website and grow your online presence. We will make it look great, work fast and perform well with a seamless user experience.",
    },
    {
        image: marketing,
        color:"bg-blue-800",
        title: "Creative marketing",
        description: "Our strategy ensures the growth of your brand. Our approach guarantees a standout, speedy site that boosts your business and delights users.",
    },
];

const Services = () => {
  

  return (
    <div id="services" className="bg-gray-50 dark:bg-neutral-900" >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
      <h2 className="text-4xl text-yellow-200 font-bold">Our Services</h2>
      <p className="text-gris-200 pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
      We Specialize in Creating Great Quality Designs and Our Team Can Prove it!.
      </p>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
      {servicesData.map(({ title, description, image }) => (
        <div key={title}>
          <div className="h-32 w-32 flex justify-center mx-auto">
            <Image
              src={image}
              alt="icon"
              width={130}
              height={130}
              quality={75}
              sizes="100vw"
              priority
            />
          </div>
          <h2 className="font-bold text-xl text-center m-3">{title}</h2>
          <p className="pt-2 text-base text-center mb-6 dark:text-neutral-400">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
};

export default Services;
