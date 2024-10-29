import React from 'react'
import SecondaryButton from '../components/SecondaryButton';
import { BsArrowRightShort } from "react-icons/bs";
import Imagery from "../assets/images/image-2.png";

const Explore = () => {
  return (
    <section className="flex flex-wrap max-xl:flex-col-reverse gap-y-6  gap-x-[150px] max-container">
      <div className="flex flex-1 flex-col justify-center items-start  ">
        <div>
          <h2  className="text-gradient-1 text-start text-[50px] max-sm:text-[20px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
            How Podcastify Helps
            You Listen, Learn, and
            Laugh with Podcasts
          </h2>
          <p  className="flex text-start text-white-400 text-xl  max-sm:text-[13px] leading-8 max-sm:leading-normal mt-3 max-sm:mt-1 max-xl:text-lg max-xl:leading-7">
            Track and measure your podcast performance, 
            audience engagement, and monetization metrics with
            detailed and interactive reports.
            
          </p>
        </div>
        
        <div className="flex mt-3 md:mt-6">
          <SecondaryButton>
            Try for Free
            <BsArrowRightShort className='ml-1 text-3xl'/>
          </SecondaryButton>
        </div>
        <div className="flex mt-2 md:mt-5 gap-x-6 items-center">
          <h3 className="text-white-400 text-xl md:text-[52px] font-bold after:">+100k</h3>
          <p className="text-white-400 md:font-medium text-[10px] md:text-xl ">World-wide <br /> Listeners</p>
        </div>
      </div>
      <div className="lg:max-w-xl flex flex-1 flex-col justify-center items-center p-4 md:p-8 rounded-xl bg-borderColor border border-zinc-600">
        <img 
          src={Imagery} 
          alt="imagery" 
          className="rounded-lg md:rounded-xl"
        />
        <p className='mt-5 text-white-400 flex flex-wrap text-center font text-xl max-sm:text-sm leading-normal  md:max-w-[400px]'>
          Navigate thought galaxies: Explore, engage and expand with podcasts
        </p>
      </div>
    </section>
  )
}

export default Explore