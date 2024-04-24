import Plans from "@/components/Plans";
import ServiceReuse from "@/components/serviceReuse";
import React from "react";

const Webhosting = () => {
  const slides = [
    {
      image: "/abouthero.jpeg",
      caption: "Web Development",
      description:
        "Unleash Your Online Potential with Dataspace Website Development Services.",
    },
  ];
  return (
    <div>
      <ServiceReuse slides={slides} />
      <Plans/> 
    </div>
  );
};

export default Webhosting;
