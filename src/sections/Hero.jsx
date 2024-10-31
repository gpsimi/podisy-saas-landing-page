import React from 'react'
import PrimaryButton from "../components/PrimaryButton";
import { BsArrowRightShort } from "react-icons/bs";
// import Excitement from "../assets/images/excitement-1.png";
// import TestifierImage1 from "../assets/images/testifier-2.png";
import DashImage from "../assets/images/DashImage.jpg";

const Hero = () => {
  return (
    <section 
      id="home"
      className="w-full flex flex-col min-h-screen container mx-auto items-center  lg:gap-10"
    >

      <div className="mt-32 lg:mt-60 flex flex-col items-center justify-center max-w-[95%]">

        <h1 className="text-gradient-1 text-3xl md:text-[60px] lg:leading-[75px] font-bold mb-4 text-center max-w-4xl ">
          Experience the Magic of Sound and Storytelling
        </h1>
        <p className="mb-8 text-gray-400 text-center max-w-2xl text-md lg:text-lg ">
          Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey through captivating narratives.
        </p>
        <button className="flex bg-white text-primary px-6 py-2 rounded-md font-semibold border border-white  hover:bg-transparent hover:text-white duration-500">
          Get Started Free
          <BsArrowRightShort className='ml-1 text-3xl'/>
        </button>
      </div>




      <div className="relative flex flex-col items-center justify-center pt-32 max-xl:padding-x lg:pt-[200px] space-y-8">       
        <h1 className='text-gradient-1 text-center text-[27px] font-semibold leading-[40px] md:text-[60px] md:leading-[70px] '>
          Experiencing the Magic Sound <br /> and Storytelling
        </h1>
        {/* <p className='text-white-400 text-center text-xl  max-sm:text-[7px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7  '> */}
        <p className='text-white-400 text-center lg:text-xl max-w-2xl'>
          Explore vibrant soundscapes where stories of every kind come alive,
          taking you on an immersive journey through captivating narratives.
        </p>

        <div className=''>
          <PrimaryButton>
            Get Started Free
            <BsArrowRightShort className='ml-1 text-3xl'/>
          </PrimaryButton>
        </div>

        {/* <div className="mt-24 max-sm:mt-8">
          <img 
            src={DashImage} 
            alt="Dashboard-Image"
            className="box-shadow rounded-3xl max-sm:rounded-lg w-full object-contain"
          />
        </div> */}

        <div className="">
          <img 
            src={DashImage} 
            className='w-full object-contain'
            alt="" 
          />
        </div>

      </div>



    </section>
  )
}

export default Hero