"use client";
import Plans from "@/components/Plans";
import ColocationAccordian from "@/components/accordian";
import Colocationhero from "@/components/colocationhero";
import React from "react";

const Colocation = () => {
  return (
    <main>
      <Colocationhero />
      <div className="w-100% flex justify-center ">
        <div className="px-[4%] my-[5%]">
          <h1 className=" text-5xl  font-bold">
            Why Choose Dataspace Co-location Services?
          </h1>
          <ul className="pl-6 pt-16 text-3xl  leading-relaxed list-decimal font-medium">
            <ColocationAccordian />
          </ul>
        </div>
        <img src="/Questions.png" alt="" />
      </div>
      <Plans/>
    </main>
  );
};

export default Colocation;
