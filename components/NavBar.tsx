'use client'
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <div className={`px-9 top-10 ${scrolled ? 'bg-white' : ''}`} style={{ transition: 'background-color 0.4s ease-in-out ' }}>
      <div className="h-32 mt-0 relative px-6 ">

        <img src="/dataspacelogo1.png" alt="" className="h-16 absolute top-5" />
        <div className="flex justify-end">
          <ul className={`flex gap-8 absolute top-12 right-32 font-light text-2xl ${scrolled ? 'text-black' : 'text-white'}`}>
            <li>Home</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Contact</li>  
          </ul>

          <img
            src="/NavImg.jpeg"
            alt=""
            className="h-12 w-12 rounded-full absolute top-9"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
