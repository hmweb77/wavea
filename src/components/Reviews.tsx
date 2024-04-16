

import Carous from "./Carous";

export default function Reviews() {
  return (
    <section className='max-container'>
      <div>
        <h3 className='mt-10 text-blue-500 text-4xl text-center sm:text-4xl md:text-4xl lg:text-5xl font-bold'>
          See what our clients say about us
        </h3>
      </div>
      <div className=' mt-5 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        <Carous />
      </div>
    </section>
  )
}
