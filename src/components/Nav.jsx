// import React, { useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose, MdOutlineClose } from "react-icons/md";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="relative bg-blue-600 text-white">
//       <div className="flex items-center justify-between p-4">
//         <h1 className="text-lg font-bold">Logo</h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#home" className="hover:text-gray-300">Home</a>
//           <a href="#about" className="hover:text-gray-300">About</a>
//           <a href="#services" className="hover:text-gray-300">Services</a>
//           <a href="#contact" className="hover:text-gray-300">Contact</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden focus:outline-none"
//         >
//           <span className="">{isOpen ? <MdClose className=""/> : <GiHamburgerMenu />}</span>
//         </button>
//       </div>

//       {/* Full-Screen Mobile Overlay */}
//       {isOpen && (
//         <div className="relative inset-0 bg-blue-600 bg-opacity-95 text-white flex flex-col items-center justify-center z-10 md:hidden">
//           <ul className="space-y-6 text-lg font-semibold">
//             <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//             <li><a href="#about" onClick={toggleMenu}>About</a></li>
//             <li><a href="#services" onClick={toggleMenu}>Services</a></li>
//             <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;


















import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdOutlineClose } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your logo */}
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-black font-bold">P</span>
          </div>
          <h1 className="text-xl font-bold">Podisy</h1>
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-gray-400">
            Features
          </a>
          <a href="#pricing" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#company" className="hover:text-gray-400">
            Company
          </a>
          <a href="#faqs" className="hover:text-gray-400">
            FAQ's
          </a>
        </div>

        {/* Sign up button */}
        <div className="hidden md:block">
          <button className="bg-white text-black py-2 px-6 rounded-full">
            Sign up
          </button>
        </div>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {/* {isOpen ? (
              <MdClose className="h-6 w-6 text-white" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            )} */}

            <span className="">{<GiHamburgerMenu className="text-xl" />}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className={`fixed inset-0 bg-black  text-white flex flex-col items-center justify-center z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden px-6`}>

          <button onClick={toggleMenu}
            className="absolute top-5 right-4 focus:outline-none">
            <span className="">{<MdClose className="text-xl" />}</span>
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
      )}
    </nav>
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
