
import Image from 'next/image'
import Calendar from "@/assets/punctuality.svg"
import Icon from "@/assets/Icon.svg"
import Link from 'next/link'



export default function Meeting() {
  return (

    <section className='flex flex-col items-center justify-center '>
      <div id='contact' className='  bg-blue-300 flex flex-col justify-between items-center text-center w-345 h-454 mr-3 mb-14 md:flex-row md:items-center md:justify-center md:w-1170 md:h-330 rounded-26 '>
        <Image className='w-133 h-133 md:w-200 md:h-200 md:ml-20 mt-4' src={Calendar} alt="calendar" />
        <h1 className='text-white-200 text-center font-montserrat font-bolt text-2xl md:text-4xl mx-16 md:mx-8'>Schedule a quick 15-30 minute meeting with our experts now</h1>
        <Link href='https://calendly.com/wavea2024/15min'>
          <button className=' bg-yellow-100 w-180 h-56 rounded-lg py-4 px-5 gap-2.5 md:mr-14 md:mt-16 shrink-0 mb-14 mx-20 flex justify-center items-center'>
            <span className='text-blue-400 font-montserrat text-base'>Book now </span>
            <Image src={Icon} alt="icon" />
          </button>
        </Link>
      </div>
    </section>

  )
}
