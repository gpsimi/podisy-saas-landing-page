import React from 'react'
import PrimaryButton from "../components/PrimaryButton";
import { BsArrowRightShort } from "react-icons/bs";
import DashImage from "../assets/images/DashImage.jpg";

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col min-h-screen container mx-auto items-center  lg:gap-10">
      
      <div className="mt-24 lg:mt-36 flex flex-col items-center justify-center max-w-[95%]">
        <h1 className="headings text-center max-w-4xl">
          Experience the Magic of Sound and Storytelling
        </h1>
        <p className="bodyText">
          Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey through captivating narratives.
        </p>
        <button className="flex bg-buttonColor text-primary px-6 py-2 rounded-md font-semibold border border-buttonColor  hover:bg-transparent hover:text-white duration-500">
          Get Started Free
          <BsArrowRightShort className='ml-1 text-3xl' />
        </button>
      </div>
      
      <div className="py-12 px-4 ">
        <div className="max-w-6xl mx-auto">
          <img 
            src={DashImage}
            alt="Podcast preview"
            className="w-full rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
      
    </section>
  )
}

export default Hero