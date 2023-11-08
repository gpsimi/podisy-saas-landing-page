import React from 'react'
import Imagery from "../assets/images/logo.png";
import { AiFillTwitterSquare, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center flex-wrap max-lg:flex-col">
        <div className="flex flex-1 flex-col items-start">
          <a href="/">
            <img 
              src={Imagery} 
              className="lg:w-[150px] max-md:w-24"
              width={150}
              height={30}
              alt="Footer-Logo" 
            />
          </a>
          <p className="mt-6 text-base leading-normal font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-6">
            <div className="flex justify-center items-center gap-x-2 ">
              <a href="/">
                <AiFillFacebook 
                  className="text-2xl md:text-[30px] text-white "
                />
              </a>
              <a href="/">
                <AiFillTwitterSquare 
                  className="text-2xl md:text-[30px] text-white "
                />
              </a>
              <a href="/">
                <AiFillLinkedin 
                  className="text-2xl md:text-[30px] text-white "
                />
              </a>
              <a href="/">
                <AiFillInstagram 
                  className="text-2xl md:text-[30px] text-white "
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-1 items-start md:gap-[300px] gap-10 max-md:mt-8 lg:flex-wrap">
            {footerLinks .map((section) => (
              <div key={section}>
                <h4 className="text-white text-xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul className="">
                  {section.links.map((link) => (
                    <li className="mt-3 text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer"
                      key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer