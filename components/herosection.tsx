import React from "react";
import NavBar from "./NavBar";
import ButtonHerosection from "./buttonHerosection";

const Herosection = () => {
  const imgStyles = {
    width: "1440px",
    height: "667px",
  }; 
  const divStyles = {
    width: "1440px",
    height: "667px",
  };
  return (
    <main className="flex justify-between gap w-[max-content]">
      <div>
        <div className="relative">
          <div style={divStyles} className=" absolute bg-black/50"></div>
          <img src="/hero1.png" alt="" style={imgStyles} />
        </div>
        <div className=" absolute top-[65%] left-[7%]">
          <h1 className="text-7xl text-white">CO-LOCATION</h1>
          <ButtonHerosection />
        </div>
      </div>

            <div className="">
        <div className="relative">
          <div style={divStyles} className=" absolute bg-black/50"></div>
          <img src="/hero1.png" alt="" style={imgStyles} />
        </div>
        <div className="w-full absolute top-[65%] left-[10%]">
          <h1 className="text-7xl text-white">CO-LOCATION</h1>
          <ButtonHerosection />
        </div>
      </div>

    </main>
  );
};

export default Herosection;
