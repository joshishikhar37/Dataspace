import React from "react";
import NavBar from "./NavBar";
import ButtonHerosection from "./buttonHerosection";

const Herosection = () => {
  const imgStyles = {
    width: "1440px",
    height: "667px",
  };
  return (
    <main className="flex">
      <div>
        <div className="relative bg-black">
          <img src="/hero1.png" alt="" style={imgStyles} />
        </div>
        <div className=" absolute top-[65%] left-[7%]">
          <h1 className="text-7xl text-white">CO-LOCATION</h1>
          <ButtonHerosection />
        </div>
      </div>
    </main>
  );
};

export default Herosection;
