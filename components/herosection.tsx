import React from "react";
import NavBar from "./NavBar";
import ButtonHerosection from "./buttonHerosection";

const Herosection = () => {
  const imgStyles = {
    width: "100vw",
    height: "667px",
  };
  const divStyles = {
    width: "1440px",
    height: "667px",
  };
  return (
    <main className="flex justify-between w-[max-content]">
      <div className="relative">
        <div>
          <div style={divStyles} className=" absolute bg-black/50"></div>
          <img src="/hero1.png" alt="" style={imgStyles} className="w-max-screen" />
        </div>
        <div className=" absolute top-[50%] left-[3%]">
          <h1 className="text-7xl text-white">CO-LOCATION</h1>
          <ButtonHerosection />
        </div>
      </div>
      <div className="relative">
        <div>
          <div style={divStyles} className=" absolute bg-black/50"></div>
          <img src="/bg2.jpeg" alt="" style={imgStyles} />
        </div>
        <div className=" absolute top-[50%] left-[3%]">
          <h1 className="text-7xl text-white">VIRTUAL PRIVATE SERVER</h1>
          <ButtonHerosection />
        </div>
      </div>

     
    </main>
  );
};

export default Herosection;
