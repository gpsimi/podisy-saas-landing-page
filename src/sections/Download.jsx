import React from 'react'
import Imagery from "../assets/images/image-1.png";
import SecondaryButton from "../components/SecondaryButton";
import { BsArrowRightShort } from "react-icons/bs";

const Download = () => {
  return (
    <section className="flex flex-wrap max-container">
      <div className="flex justify-between flex-col md:flex-row gap-y-8  gap-x-[60px]  bg-borderColor border border-zinc-600 p-6 md:p-16 rounded-2xl">
       
        <img 
          src={Imagery} 
          alt="Imagery" 
          className="rounded w-[500px]"
        />
        
        <div className="gap-y-8">
        
            <h2  className="text-main text-start text-[50px] max-sm:text-[20px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
              We provide the Latest <br /> podcasts for you
            </h2>
            <p  className="text-start text-white-400 text-xl max-sm:text-[13px] leading-8 max-sm:leading-normal mt-3 md:mt-6 max-xl:text-lg max-xl:leading-7">
              Track and measure your podcast performance, 
              audience engagement, and monetization metrics with
              detailed and interactive reports.
              
            </p>
        
          
          <div className="flex mt-3 md:mt-6">
            <SecondaryButton>
              Try for Free
              <BsArrowRightShort className='ml-1 text-3xl'/>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download