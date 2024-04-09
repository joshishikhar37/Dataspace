"use client";
import Abouthero from "@/components/abouthero";
import React from "react";

const About = () => {
  return (
    <main>
      <Abouthero />

      <section className="w-[90%]">
        <div>
          <h1>Contact Information</h1>
                  <h2>Feel free to contact us in case of problem</h2>
                  <div> <img src="/Vector.png" alt="" /> <p>+123 456 7890</p></div>
                  <div> <p>+123 456 7890</p></div>
                  <div> <p>+123 456 7890</p></div>

        </div>
        <div></div>
      </section>
    </main>
  );
};

export default About;
