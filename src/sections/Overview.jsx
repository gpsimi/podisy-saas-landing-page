import React from 'react'
import OverView from "../assets/images/overview.jpg";
import { BsPlayCircleFill } from "react-icons/bs";

const Overview = () => {
  return (
    <section id="overview" className="max-container">
      <div className="flex flex-col justify-center items-center">
        <h2  className="text-main text-center text-[55px] max-sm:text-[17px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
          How it Works
        </h2>
        <p  className="flex flex-1 flex-wrap text-center text-white-400 text-xl  max-sm:text-[7px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7">
          The podcast dashboard's intuitive interface makes managing episodesa
          <br />breeze. The audience insights provide valuable data.
        </p>
      </div>
      <div className="relative xl:mt-20 mt-10 xl:p-16 p-12 rounded-3xl bg-borderColor border border-zinc-600 object-contain ">
        <img 
          src={OverView} 
          alt={Overview} 
          className="rounded-2xl w-full opacity-40"
        />
        <BsPlayCircleFill className="absolute text-6xl text-white-400" />
      </div>
    </section>
  )
}

export default Overview