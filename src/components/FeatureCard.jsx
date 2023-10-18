import React from 'react'

const FeatureCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[300px] w-full rounded-[20px] shadow-3xl px-8 py-12 border border-borderColor bg-excitement">
      <div className='w-11 h-11 flex justify-center items-center border-[3px] border-borderColor rounded-xl p-2'>
        <img 
         src={imgURL} 
         alt={label}
         width={24}
         height={24}
        />
      </div>
      <h3 className="mt-5 text-main text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words text-white-400 font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default FeatureCard