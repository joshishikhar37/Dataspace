"use client";
import Contactform from "@/components/contactform";
import Contacthero from "@/components/contacthero";
import React from "react";

const Contact = () => {
  return (
    <main>
      <Contacthero />

      <div className="flex justify-center mx-auto text-center my-12">
        <Contactform />
      </div>
    </main>
  );
};

export default Contact;
