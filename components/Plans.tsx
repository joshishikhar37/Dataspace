import React from "react";
import Buttoncart from "@/components/buttoncart";
import plans from "@/assets/plans.json";

import Image from "next/image";

type PlanCategory = {
  title: string;
  description: string;
};

type PlansObject = {
  [key: string]: PlanCategory[];
};

const Plans = () => {
  return (
    <div className="flex justify-between">
      {Object.keys(plans).map((planKey: keyof PlansObject) => (
        <div
          key={planKey}
          className="shadow-2xl rounded-lg w-[300px] my-10 mx-16"
        >
          <div className="relative flex justify-center">
            <Image
              src="/plans.png"
              alt="footerimage"
              width={308}
              height={113.34}
              className="rounded-t-lg"
            />
            <h1 className="absolute top-[60%] px-6 text-white font-black ">
              {planKey}
            </h1>
          </div>
          <div>
            <div className="text-black flex flex-col gap-1 py-2 font-large">
              {(plans as PlansObject)[planKey].map((item, index) => (
                <div key={index} className="flex mx-auto">
                  <span>{item.title}</span>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center hover:scale-105">
              <Buttoncart />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
