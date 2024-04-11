import ServiceReuse from "@/components/serviceReuse";
import React from "react";

const Backup = () => {
  const slides = [
    {
      image: "/abouthero.jpeg",
      caption: "End Point Security",
      description:
        "Introducing Dataspace Endpoint Security: Safeguarding Your Devices in a Connected World.",
    },
  ];
  return (
    <div>
      <ServiceReuse slides={slides} />
    </div>
  );
};

export default Backup;
