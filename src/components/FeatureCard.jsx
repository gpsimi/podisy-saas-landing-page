import React from 'react'
import { features } from '../constants'


const FeatureCard = () => {
  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className="bg-primary border border-borderColor p-5 rounded-lg">
          <div className='w-11 h-11 flex justify-center items-center border border-zinc-700 rounded-xl p-1'>
            <img
              src={feature.imgURL}
              alt={feature.label}
              width={24}
              height={24}
            />
          </div>
          <h3 className="mt-3 text-main text-2xl font-bold">{feature.label}</h3>
          <p className="text-gray-400 mt-2">{feature.subtext}</p>
        </div>
      ))}


      {/* <div className='w-11 h-11 flex justify-center items-center border border-zinc-700 rounded-xl p-1'>
        <img 
         src={imgURL} 
         alt={label}
         width={24}
         height={24}
        />
      </div>
      <h3 className="mt-5 text-main text-3xl max-sm:text-2xl leading-normal max-sm:font-semibold font-bold">{label}</h3>
      <p className="mt-3 break-words text-white-400 font-montserrat text-lg max-sm:text-base leading-normal text-slate-gray">{subtext}</p> */}
    </>
  )
}

export default FeatureCard