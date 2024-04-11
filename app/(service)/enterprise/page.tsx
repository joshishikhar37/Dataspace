import ServiceReuse from "@/components/serviceReuse";
import React from "react";

const Enterprise = () => {
    const slides = [
        {
          image: "/abouthero.jpeg",
          caption: "Enterprise Secure E-mail",
          description:
            "Introducing Dataspace Enterprise Secure Email: Elevate Your Communication with Unparalleled Protection."
        },
      ];
  return (
    <div>
      <ServiceReuse slides={slides} />
    </div>
  );
};

export default Enterprise;
