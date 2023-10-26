import React from 'react'
import OverView from "../assets/images/overview.jpg";
import { BsPlayCircleFill } from "react-icons/bs";

const Overview = () => {
  return (
    <section id="overview" className="max-container">
      <div className="flex flex-col justify-center items-center">
        <h2  className="text-main text-center text-[55px] max-sm:text-[20px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
          How it Works
        </h2>
        <p  className="flex flex-wrap text-center text-white-400 text-xl max-sm:text-[10px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7 max-w-xl">
        The podcast dashboard's intuitive interface makes managing episodes a
        breeze. The audience insights provide valuable data.
          
        </p>
      </div>
      <div className="relative xl:mt-20 mt-10 xl:p-16 p-12  max-md:p-6 max-sm:p-3 rounded-2xl max-md:rounded-lg bg-borderColor border border-zinc-600 object-contain flex items-center justify-center">
        <img 
          src={OverView} 
          alt={Overview} 
          className="rounded-2xl w-full opacity-40 max-md:rounded"
        />
        <BsPlayCircleFill className="absolute text-6xl max-lg:text-2xl max-sm:text-xl text-buttonColor cursor-pointer" />
      </div>
    </section>
  )
}

export default Overview