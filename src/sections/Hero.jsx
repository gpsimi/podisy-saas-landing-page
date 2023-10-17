import React from 'react'
import PrimaryButton from "../components/PrimaryButton";
import { BsArrowRightShort } from "react-icons/bs";
// import Excitement from "../assets/images/excitement-1.png";
// import TestifierImage1 from "../assets/images/testifier-2.png";
import DashImage from "../assets/images/DashImage.jpg";

const Hero = () => {
  return (
    <section 
      id="#home"
      className="w-full flex flex-col min-h-screen max-container gap-10"
    >
      <div className="relative flex flex-col items-center justify-center pt-40 max-xl:padding-x lg:pt-[230px]">       
        <h1 className='text-main text-center text-6xl max-sm:text-[17px] max-sm:leading-[23px] font-semibold max-xl:text-4xl'>
          Experiencing the Magic Sound <br /> and Storytelling
        </h1>
        <p className='text-white-400 text-center text-xl  max-sm:text-[7px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7  '>
          Explore vibrant soundscapes where stories of every kind come alive,
          taking <br /> you on an immersive journey through captivating narratives.
        </p>

        {/* <div className="absolute -top-[-10%] -right-[16%]">
          <img 
            src={Excitement} 
            alt=""
            className="w-[120px]"
          />
        </div> */}

        <div className='mt-6'>
          <PrimaryButton className={"max-sm:mt-1 mt-10 flex items-center"}>
            Get Started Free
            <BsArrowRightShort className='ml-1 text-3xl'/>
          </PrimaryButton>
        </div>

        
        
        <div className="mt-16 max-sm:mt-8 p-x-4 flex items-center">
        {/* <img 
            src={TestifierImage1} 
            alt=""
            className="bg-white"
          /> */}
          <img 
            src={DashImage} 
            alt="Dashboard-Image"
            className="box-shadow rounded-3xl max-sm:rounded-lg w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero