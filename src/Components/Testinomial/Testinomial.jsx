import React from 'react'
import {img} from '../../assets/image/img';


function Testinomial() {
  return (
    <div className=" px-4 h-full  bg-black sm:px-8 md:px-16 w-full flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-white lg:text-6xl sm:text-2xl font-semibold">Let’s make you a <span className='text-yellow-400'>Brand</span></h1>
        <p className="text-gray-400 font-extrabold mt-7 text-lg">
          We help founders and CXOs unlock the power of their <br/> personal brands, one post at a time.
        </p>
        <button className="mt-10 px-5 py-2 bg-yellow-400 text-black rounded-3xl hover:bg-white cursor-pointer">
          Get In Touch
        </button>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-4">
        Customers Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
       
      </div>
    </div>
  )
}

export default Testinomial
