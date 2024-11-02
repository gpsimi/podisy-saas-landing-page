import React from 'react';
import { testimonials } from '../constants';


const Testimonials = () => {
  return (

    <section className="bg-gray-900 py-16 px-4 text-white">
    <h2 className="text-center text-3xl font-semibold mb-8">What people are saying</h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg max-w-sm text-center">
          <p className="mb-4 text-gray-400">"{testimonial.quote}"</p>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-gray-500">{testimonial.role}</p>
        </div>
      ))}
    </div>
  </section>



    // <section className="flex flex-col items-center">
    //   <div className="flex flex-col items-center ">
    //     <h2 className="headings text-center max-w-3xl">
    //       What People are saying
    //     </h2>
    //   </div>
    //   <div className="">

    //   </div>
    // </section>
  )
}

export default Testimonials