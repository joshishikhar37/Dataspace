import React from "react";

const NavBar = () => {
  return (
    <div className="h-32 relative px-6  bg-blue-900">
      <img src="/dataspacelogo1.png" alt="" className="h-16 absolute top-5" />
      <div className="flex justify-end">
        <ul className="flex gap-12 absolute top-12 right-32 text-white font-light text-xl  ">
          <li>Home</li>
          <li>Service</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <img
          src="/NavImg.jpeg"
          alt=""
          className="h-12 w-12 rounded-full absolute top-9 right-12"
        />
      </div>
    </div>
  );
};

export default NavBar;
