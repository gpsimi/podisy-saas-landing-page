import React from 'react'
import OverView from "../assets/images/overview.jpg";
import { BsPlayCircleFill } from "react-icons/bs";

const Overview = () => {
  return (
    <section id="overview" className="max-container">
      <div className="flex flex-col justify-center items-center lg:mb-9">
        <h2  className="headings">
          How it Works
        </h2>
        <p  className="bodyText ">
        The podcast dashboard's intuitive interface makes managing episodes a
        breeze. The audience insights provide valuable data.
        </p>
      </div>

      <div className="max-w-6xl mx-auto lg:py-12 lg:px-12 max-sm:p-3 rounded-2xl max-md:rounded-lg bg-borderColor border border-zinc-600 object-contain flex items-center justify-center">
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