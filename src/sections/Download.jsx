import React from 'react'
import Imagery from "../assets/images/image-1.png";
import SecondaryButton from "../components/SecondaryButton";
import { BsArrowRightShort } from "react-icons/bs";

const Download = () => {
  return (
    <section className="container mx-auto md:max-w-[80%]">
      <div className="flex justify-between flex-col md:flex-row gap-y-4  gap-x-12  bg-borderColor border border-zinc-600 p-4 md:p-10 rounded-2xl">

        <img
          src={Imagery}
          alt="Imagery"
          className="md:max-w-[500px] max-sm:rounded max-md:rounded-xl lg:rounded-2xl"
        />

        <div className="gap-y-8">

          <h2 className="headings items-start max-w-2xl">
            We provide the Latest podcasts for you
          </h2>
          <p className="bodyText text-start max-w-lg">
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
        </div>
      </div>
    </section>
  )
}

export default Download