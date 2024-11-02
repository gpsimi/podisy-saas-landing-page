import React from 'react'
import Imagery from "../assets/images/logo.png";
import { AiFillTwitterSquare, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="container mx-auto md:max-w-[85%]">
      <div className="flex flex-col lg:flex-row justify-between items-start py-12 lg:py-16 ">
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <a href="/">
            <img src={Imagery}
              alt="Logo"
              className="lg:w-[120px] w-[100px]"
              width={12}
              height={30}
            />
          </a>
          <p className="mt-6 bodyText text-start max-w-md">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-">
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

        <div className="flex items-start md:gap-16 gap-10 max-md:mt-8  w-full lg:w-1/2">
          {footerLinks.map((section) => (
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