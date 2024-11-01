import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import Imagery from "../assets/images/image-2.png";

const Explore = () => {
  return (
    <section className="lg:container mx-auto lg:max-w-[90%] mt-12">
      <div className='flex lg:flex-row flex-col-reverse gap-8 items-center justify-between lg:max-w-[90%]'>
        <div className='w-full lg:w-1/2'>
          <div>
            <h2 className="headings items-start">
              How Podcastify Helps
              You Listen, Learn, and
              Laugh with Podcasts
            </h2>
            <p className="bodyText text-start">
              Track and measure your podcast performance,
              audience engagement, and monetization metrics with
              detailed and interactive reports.
            </p>
            <div className="flex mt-3 md:mt-6">
              <button className="flex bg-transparent text-white px-6 py-2 rounded-md font-semibold border border-buttonColor  hover:bg-white hover:text-primary duration-500">
                Try for Free
                <BsArrowRightShort className='ml-1 text-3xl' />
              </button>
            </div>
            <div className="flex flex-row items-start justify-start mt-2 md:mt-5 gap-x-6 ">
              <h3 className="text-white-400 text-3xl font-bold">+100k</h3>
              <p className="bodyText text-start">World-wide <br /> Listeners</p>
            </div>
          </div>

        </div>
        <div className='w-full lg:w-1/2 p-4 md:p-8 rounded-xl bg-borderColor border border-zinc-600'>
          <div className=" ">
            <img
              src={Imagery}
              alt="imagery"
              className="rounded-lg md:rounded-xl -mt-12"
            />
            <p className='mt-5 bodyText'>
              Navigate thought galaxies: Explore, engage and expand with podcasts
            </p>
          </div>
        </div>
      </div>




      {/* <div className="flex flex-1 flex-col justify-center items-start  ">
        <div>
          <h2 className="headings items-start">
            How Podcastify Helps
            You Listen, Learn, and
            Laugh with Podcasts
          </h2>
          <p className="bodyText text-start ">
            Track and measure your podcast performance,
            audience engagement, and monetization metrics with
            detailed and interactive reports.

          </p>
        </div>

        <div className="flex mt-3 md:mt-6">
          <SecondaryButton>
            Try for Free
            <BsArrowRightShort className='ml-1 text-3xl' />
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
      </div> */}
    </section>
  )
}

export default Explore