// import React from 'react'
import Logo from "../assets/images/logo.png";
import { navLinks } from '../constants';
import { HiOutlineMenu } from "react-icons/hi"


const Nav = () => {
  return (
    <header className="padding-x py-8 bg-primary absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={Logo} 
           alt="Logo" 
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
          <button className='text-primary bg-buttonColor px-8 py-3 rounded font-medium border-white border hover:bg-transparent hover:text-white duration-500'>Sign Up</button>
        </div>
        <div className="hidden max-lg:block cursor-pointer">
            <HiOutlineMenu 
              width={40}
              className="text-white-400"
            />
        </div>
      </nav>
    </header>
  )
}

export default Nav