"use client";
import Contactform from "@/components/contactform";
import Contacthero from "@/components/contacthero";
import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const Contact = () => {
  return (
    <main>
      <Contacthero />

      <div className="flex justify-center mx-auto text-center my-12">
        <Contactform />
      </div>
      <div className="flex justify-center my-12">
        <GoogleMapsEmbed
          apiKey="AIzaSyCbBnz_FHCJyL6Y6WwJ2m1CDj9K24Ij9Wc"
          width={1200}
          height={500}
          mode="place"
          q=" Sastra+Network+Solution+Inc ,Putalisadak, Kathmandu, NP"
        />
      </div>
    </main>
  );
};

export default Contact;
