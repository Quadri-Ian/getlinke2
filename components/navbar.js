import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the necessary FontAwesome icons
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars); // Initialize the menu icon to the "burger" icon

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle the menu icon between "burger" and "times"
    setMenuIcon(isOpen ? faBars : faTimes);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
    setMenuIcon(faBars); // Set the menu icon back to "burger" when the menu is closed
  };

  return (
    <div className=''>
      {/* Navbar (Mobile) */}
      <div className=''>
        <nav className="p-4 px-12 text-white border-b-2 lg:hidden">
          <div className="flex justify-between items-center">
            <Link href='/'>
              <div className="text-md md:text-1xl font-bold">get<span className='text-techpurple'>linked</span></div>
            </Link>
            {/* Hamburger button */}
            <button
              className="lm:hidden  text-cyan-300 z-10 hover:text-cyan-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <Image src='/vector.svg' alt='menu' width={20} height={20} className='w-5 md:w-8'/>            
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile bg-[#150E28] absolute top-0  w-full  text-white flex flex-col items-end pr-6">
            {/* Close button */}
            <div className='px-10 bg-red-600'>
            <button
              onClick={closeMenu}
              className="rounded-full mt-4 "
              style={{
                backgroundColor: "#150E28",
                padding: "3px",
                borderRadius: "50%",
                background: "linear-gradient(to right, #FF6B82, #903AFF)",
              }}
            >
              <p className="text-2xl px-2 rounded-full bg-black text-white">X</p>
            </button>              
            </div>


            {/* Mobile menu items */}
            <div className="space-y-8 w-full p-8 bg-[#150E28]">
              <ul className='space-y-4 bg-[#150E28]'>
                <li>
                  <Link className="text-lg " onClick={closeMenu} href="#timeline">
                    Timeline 
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="#overview">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="#faqs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="/contact">
                    Contact
                  </Link>
                </li>
                {/* Add more menu items as needed */}
              </ul>

              {/* Register button */}
              <div className='mt-8'>
                <Link className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink to-techpurple text-white" onClick={closeMenu} href="/register">
                  Register
                </Link>       
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rest of the Navbar content */}
      {/* Navbar (Desktop) */}
      <nav className="p-6 px-12 text-white hidden lg:block w-full">
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl font-bold">get<span className='text-techpurple'>linked</span></div>
          <div className="flex justify-between items-center space-x-6">
            <div >
              <ul className="flex justify-between space-x-4"> 
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="#timeline">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="#overview">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="#faqs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" onClick={closeMenu} href="/contact">
                    Contact
                  </Link>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            </div>
            <div className=''>
              <Link className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink to-techpurple text-white" onClick={closeMenu} href="/register">
                Register
              </Link>                   
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
