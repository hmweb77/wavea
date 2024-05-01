// components/ResponsiveImageSection.js
import Image from 'next/image';
import Desktop from "../assets/infographic1 1.png"
import Mobile from "../assets/infographic-mobile 1.svg"

export default function Process() {
  return (
    <section className="my-8">
      <h2 className="text-center text-5xl font-bold leading-130 font-montserrat text-blue-200 ">our process</h2>
        {/* Mobile image */}
        <div className="my-4 items-center flex justify-center md:hidden">
          <Image
            src={Mobile}
            alt="Mobile Image" 
            width={440}
            height={603} 
          />
        </div>
        {/* Desktop and other versions image */}
        <div className="hidden items-center  justify-center md:flex">
          <Image
            src={Desktop}
            alt="Desktop Image"
            width={1231}
            height={700} 
          />
        </div>
    </section>
  );
}
