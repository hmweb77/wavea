
import { ProjectCard } from './ProjectCard'
import Podcast from "@/assets/podcast 1.png"
import Mockup from "@/assets/solar-mockup 1.png"
import Oclus from "@/assets/mockup1-oculos 1.png"
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold leading-130 font-montserrat text-yellow-100 md:text-6xl ">our projects</h2>
      <p className="text-center  text-black-200 font-montserrat text-base leading-180 md:text-2xl">branding, websites and marketing</p>
      {/* first section */}
      <div className='flex flex-col md:flex-row items-center justify-between '>
        <div className="w-full md:w-1/2">
          <Image src={Mockup} alt="picture" />
        </div>
        <div className="w-full md:w-1/2 text-center">
          <ProjectCard type="WEBSITE"
            title="www.solardosbicos.pt"
            description="User-friendly website featuring real food photos and dual-language support, optimized for both desktop and mobile devices." />
        </div>
      </div>
      {/* second section */}
      <div className='flex flex-col md:flex-row items-center justify-between '>
        <div className="w-full md:w-1/2 text-center order-2 md:order-1 ">
          <ProjectCard type="WEBSITE"
            title="www.financebdarija.co"
            description="A sleek, user-friendly website designed to host a financial podcast, making complex finance topics accessible in Darija." />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image className='' src={Podcast} alt="picture" />
        </div>
      </div>
      {/* third section */}
      <div className='flex flex-col md:flex-row items-center justify-between '>
        <div className="w-full md:w-1/2">
          <Image src={Oclus} alt="picture" />
        </div>
        <div className="w-full md:w-1/2 text-center ">
          <ProjectCard type="BRANDING"
            title="Aloha"
            description="Youth-oriented eyewear brand, crafted with bold, innovative designs to reflect the vibrant lifestyles of its wearers." />
        </div>
      </div>
    </div>
  )
}

export default Projects