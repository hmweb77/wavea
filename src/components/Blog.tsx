

import Carous  from "./Carous";

export default function Blog() {
  return (
    <section className='max-container'>
      <div>

    <h2 className='font-Lexend Deca text-blue-500 text-3xl text-center sm:text-4xl md:text-4xl lg:text-5xl font-bold'>
  WHAT OTHERS SAY ABOUT US
</h2>

      </div>
    <div className=' flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>   
        <Carous/>
    </div>
  </section>
)
}
