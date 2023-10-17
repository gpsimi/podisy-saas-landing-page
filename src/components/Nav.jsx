// import React from 'react'
import Logo from "../assets/images/logo.png";
import { navLinks } from '../constants';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi"
import PrimaryButton from "./PrimaryButton";


const Nav = () => {
  return (
    <header className="padding-x py-12 bg-primary absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={Logo} 
           alt="Logo" 
           className="lg:w-[120px] max-md:w-24"
           width={120}
           height={30}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="leading-normal text-lg text-white-400 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="max-lg:hidden">
          <PrimaryButton
            className={""}
            href={"/"}
          >
            Sign Up 
          </PrimaryButton>         
        </div>
        
        <div className="hidden max-lg:block cursor-pointer">
           
            <GiHamburgerMenu 
              className="text-white-400 w-[px]"
            />
        </div>
      </nav>
    </header>
  )
}

export default Nav