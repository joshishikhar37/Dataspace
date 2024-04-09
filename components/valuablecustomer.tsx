import React, { useEffect, useRef } from "react";
import Image from "next/image";
import VP1 from "@/images/VP1.png";

const Valuablecustomer = () => {
  const logos = [
    { src: VP1, alt: "Election", link: "https://google.com" },
    { src: VP1, alt: "Election", link: "https://google.com" },
    { src: VP1, alt: "Election", link: "https://google.com" },
    { src: VP1, alt: "Election", link: "https://google.com" },
    { src: VP1, alt: "Election", link: "https://google.com" },
    { src: VP1, alt: "Election", link: "https://google.com" },
  ];
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.scrollBy({
        left: -200, // Scroll towards left by changing the value to negative
        behavior: "smooth",
      });
    }, 3000); // Adjust this value to change the interval duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" px-16 pb-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={carouselRef}
        style={{ scrollSnapType: "x mandatory" }}
        className="flex gap-32 items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-60} animate-infinite-scroll hover:!animated-infinite-scroll "
      >
        {logos.map((logo, index) => (
          <div className="rounded-[30px] shadow-2xl">
            <li
              key={index}
              className="flex justify-center items-center"
              style={{
                width: "175px",
                height: "175px",
                borderRadius: "24px 24px 24px 24px",
              }}
            >
              <a href={logo.link}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: `$10px`, height: `$10px` }}
                  className="hover:scale-150 transition-all ease-in-out duration-500 h-32 w-32"
                />
              </a>
            </li>
          </div>
        ))}
      </ul>
     
    </div>
  );
};

export default Valuablecustomer;
