import React from 'react'
import SecondaryButton from "../components/SecondaryButton";
import { BsArrowRightShort } from "react-icons/bs"

const Explore = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="">
      <h2  className="text-main text-left text-[55px] max-sm:text-[17px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
          How Podcastify Helps <br /> You Listen, Learn, and <br /> Laugh with Podcasts
        </h2>
        <p  className="flex flex-1 flex-wrap text-left text-white-400 text-xl  max-sm:text-[7px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7">
          Track and measuree your podcast performance, 
          <br /> audience engagement, and monetization metrics with
          <br />detailed and interactive reports.
        </p>
        <div className="mt-6">
          <SecondaryButton className="max-sm:mt-1 mt-6 flex items-center">
            Try for Free 
            <BsArrowRightShort className='ml-1 text-3xl'/>
          </SecondaryButton>
        </div>
      </div>
      <div className="relative bg-borderColor border border-zinc-600 flex items-center justify-center">

      </div>
    </section>
  )
}

export default Explore