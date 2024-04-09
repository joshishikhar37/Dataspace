"use client";
import Abouthero from "@/components/abouthero";
import React from "react";
import Aboutcard from "@/components/aboutcard";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <Abouthero />

      <section className="flex-col justify-center">
        <h1 className="flex justify-center text-3xl py-6">WHY DATASPACE?</h1>
       <Image
              src="/aboutbody.png"
              alt="footerimage"
              width={911}
              height={484}
              className="mx-auto py-4"
            />
      </section>
      <Aboutcard/>

    </main>
  );
};

export default About;
