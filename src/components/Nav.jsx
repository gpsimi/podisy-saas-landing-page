import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";
import { navLinks } from '../constants';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 flex-between w-full z-50 bg-primary py-6 glassmorphism3">
      <nav className="container mx-auto md:max-w-[85%] flex-between items-center">
        <a href="/">
          <img src={Logo}
            alt="Logo"
            className="lg:w-[120px] w-[100px]"
            width={12}
            height={30}
          />
        </a>


        {/* Links for large screens */}
        <ul className="hidden lg:flex justify-center items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-md text-white-400 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>





        {/* Sign up button */}
        <div className="hidden lg:block">
          <button className="bg-white text-black py-2 px-8 text-md font-medium border hover:bg-transparent duration-500 hover:text-white rounded-full">
            Sign up
          </button>
        </div>

        {/* Hamburger for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {/* {isOpen ? (
                <MdClose className="h-6 w-6 text-white" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6 text-white" />
              )} */}

            <span className="">{<GiHamburgerMenu className="text-xl text-white" />}</span>
          </button>
        </div>


        {/* Mobile menu */}

        {/* {isOpen && (
        <div className="absolute h-screen inset-0 bg-black  text-white flex flex-col items-center justify-center z-50 md:hidden">
          <ul className="space-y-6 text-lg font-semibold">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )} */}

        <ul
          className={`fixed inset-0 bg-primary  text-white flex flex-col h-screen items-center justify-center z-50 transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden px-16`}
        >
          <button onClick={toggleMenu} className="absolute top-5 right-4 focus:outline-none">
            <MdClose className="text-xl" />
          </button>

          <li className="py-4">
            <a href="#features" onClick={toggleMenu} className="block py-2 hover:text-gray-400 text-xl">
              Features
            </a>
          </li>
          <li className="py-4">
            <a href="#pricing" onClick={toggleMenu} className="block py-2 hover:text-gray-400 text-xl">
              Pricing
            </a>
          </li>
          <li className="py-4">
            <a href="#company" onClick={toggleMenu} className="block py-2 hover:text-gray-400 text-xl">
              Company
            </a>
          </li>
          <li className="py-4">
            <a href="#faqs" onClick={toggleMenu} className="block py-2 hover:text-gray-400 text-xl">
              FAQ's
            </a>
          </li>

          <button onClick={toggleMenu} className="bg-white text-black py-2 px-6 rounded-full w-full mt-4">
            Sign up
          </button>
        </ul>

      </nav>
    </header>
  );
};

export default Nav;












// import React from 'react'
// import Logo from "../assets/images/logo.png";
// import { navLinks } from '../constants';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { HiOutlineMenu } from "react-icons/hi"
// import PrimaryButton from "./PrimaryButton";

// const Nav = () => {
//   return (
//     <header className="padding-x py-12 bg-primary absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={Logo}
//            alt="Logo"
//            className="lg:w-[120px] max-md:w-24"
//            width={120}
//            height={30}
//           />
//         </a>
//         <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="leading-normal text-lg text-white-400 hover:text-white"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="max-lg:hidden">
//           <PrimaryButton
//             className={""}
//             href={"/"}
//           >
//             Sign Up
//           </PrimaryButton>
//         </div>

//         <div className="hidden max-lg:block cursor-pointer">

//             <GiHamburgerMenu
//               className="text-white-400 w-[px]"
//             />
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Nav
