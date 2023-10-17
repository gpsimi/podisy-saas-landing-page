import React from 'react'

const Hero = () => {
  return (
    <section 
      id="#home"
      className="w-full min-h-screen max-container "
    >
      <div className="relative flex flex-col items-center justify-center ">
        <h1 className='text-main font-medium text-[75px] text-center mt-60 leading-relaxed'>
          Experiencing the Magic Sound <br /> and Storytelling
        </h1>
        <p className='text-white-400 text-center mt-10 text-xl lea'>
          Explore vibrant soundscapes where stories of every kind come alive,
          taking <br /> you on an immersive journey through captivating narratives.
        </p>
        <button>Get Started for free</button>
      </div>
    </section>
  )
}

export default Hero