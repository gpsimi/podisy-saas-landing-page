import React from 'react'
import FeatureCard from '../components/FeatureCard'
import { features } from '../constants'

const Features = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col justify-center items-center">
        <h2  className="text-gradient-1 text-center text-[55px] max-sm:text-[17px] max-sm:leading-[23px] leading-tight font-medium max-xl:text-4xl">
          The  Podcast Platform that <br /> Solves Your Problems
        </h2>
        <p  className="flex flex-1 flex-wrap text-center text-white-400 text-xl  max-sm:text-[10px] leading-8 max-sm:leading-normal mt-5 max-sm:mt-1 max-xl:text-lg max-xl:leading-7 max-md:max-w-[350px]">
          The Performance analysis section equips the podcasters with comprehensive 
          <br />data to engage the impact of the episodes.
        </p>
      </div>
      <div className="flex justify-center mt-16 gap-10 max-xl:flex-wrap">
        {features.map((feature) => (
          <FeatureCard key={feature.label} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features