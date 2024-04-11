import ServiceReuse from "@/components/serviceReuse";
import React from "react";

const End = () => {
    const slides = [
        {
          image: "/abouthero.jpeg",
          caption: "Backup and Replication",
          description:
            "Welcome to Dataspace Web Hosting: Your Gateway to Reliable and Scalable Online Presence."
        },
      ];
  return (
    <div>
     
        <ServiceReuse slides={slides} />
     
    </div>
  );
};

export default End;
