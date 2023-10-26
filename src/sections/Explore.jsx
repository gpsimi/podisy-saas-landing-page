import React from 'react'
import SecondaryButton from '../components/SecondaryButton';
import { BsArrowRightShort } from "react-icons/bs";

const Explore = () => {
  return (
    <section className="flex flex-wrap max-xl:flex-col-reverse gap-y-6  gap-x-[150px] max-container">
      <div className="flex flex-1 flex-col justify-center items-start  ">
        <div>
          <h2  className="text-main text-start text-[50px] max-sm:text-[20px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
            How Podcastify Helps
            You Listen, Learn, and
            Laugh with Podcasts
          </h2>
          <p  className="flex text-start text-white-400 text-xl  max-sm:text-[10px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7">
            Track and measure your podcast performance, 
            audience engagement, and monetization metrics with
            detailed and interactive reports.
            
          </p>
        </div>
        
        <div className="flex mt-6">
          <SecondaryButton>
            Try for Free
            <BsArrowRightShort className='ml-1 text-3xl'/>
          </SecondaryButton>
        </div>
        <div className="flex mt-5 gap-x-6 items-center">
          <h3 className="text-white-400 text-[52px] font-bold">+100k</h3>
          <p className="text-white-400 font-medium text-xl ">World-wide <br /> Listeners</p>
        </div>
      </div>
      <div className="lg:max-w-xl flex flex-1 flex-col justify-center items-center p-7 rounded-xl bg-borderColor border border-zinc-600">
        <p className='text-white-400 flex justify-end text-center max-w- font text-xl max-sm:text-[10px] leading-normal'>
          Navigate thought galaxies: Explore, engage and expand with podcasts
        </p>
      </div>
    </section>
  )
}

export default Explore