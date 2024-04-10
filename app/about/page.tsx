"use client";
import Abouthero from "@/components/abouthero";
import React from "react";
import Aboutcard from "@/components/aboutcard";

const About = () => {
  return (
    <main>
      <Abouthero />

      <section className="w-[90%]">
        <Aboutcard />
      </section>
    </main>
  );
};

export default About;
