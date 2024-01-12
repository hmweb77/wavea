
import ReviewCard  from "./ReviewCard";

export default function Feedback() {
  return (
    <section className='max-container'>
      <div>
    <h3 className='font-Lexend Deca text-blue-500 text-center text-5xl font-bold '>
    WHAT OTHERS SAY ABOUT US
    </h3>
      </div>
    <div className=' flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>   
        <ReviewCard/>
    </div>
  </section>


)
}

