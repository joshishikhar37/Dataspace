"use client";
import Abouthero from "@/components/abouthero";
import React from "react";
import Aboutcard from "@/components/aboutcard";
import Image from "next/image";
import aboutData from "@/assets/aboutData.json";
type aboutData = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  }[];
};
const About = () => {
  const aboutDataTyped = aboutData as aboutData;
  const chunkedKeys = chunkArray(Object.keys(aboutData), 2);
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

      <div className="">
      {/* Map through the chunked keys */}
      {chunkedKeys.map((chunk, index) => (
        <div key={index} className="flex justify-center">
          {/* Map through each pair of keys in the chunk */}
          {chunk.map((key:string) => (
            <Aboutcard
              key={key}
              title={aboutDataTyped[key][0].title}
              description={aboutDataTyped[key][0].description}
              image={aboutDataTyped[key][0].image}
            />
          ))}
        </div>
      ))}
    </div>
    </main>
  );
};
function chunkArray(array: string | any[], size: number) {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

export default About;
