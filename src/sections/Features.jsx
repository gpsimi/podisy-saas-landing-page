import React from 'react'
import FeatureCard from '../components/FeatureCard';
import CardSpotlight from '../components/CardSpotlight';

const Features = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <h2  className="headings text-center max-w-3xl">
          The Podcast Platform that Solves Your Problems
        </h2>
        <p  className="bodyText">
          The Performance analysis section equips the podcasters with comprehensive 
          <br />data to engage the impact of the episodes.
        </p>
      </div>
      <div className="lg:max-w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <FeatureCard />
      </div>
     
    </section>
  )
}

export default Features