import React from 'react'
import Buttoncart from "@/components/buttoncart"
import plans from "@/assets/plans.json"



const Plans = () => {
  const imagestyles ={
    width: "308px",
    height: "113.34px"
  };

  return (
    <div className='flex justify-between'>
      {Object.keys(plans).map((planKey: keyof PlansObject) => (
        <div key={planKey} className='shadow-2xl rounded-lg w-[300px] my-10 mx-16'>
          <div className='relative flex justify-center'>
            <img src="/plans.png" alt="footerimage" style={imagestyles} className='rounded-t-lg' />
            <h1 className='absolute top-[60%] px-6 text-white font-black '>{planKey}</h1>
          </div>
          <div>
            <div className='text-black flex flex-col gap-1 py-2 font-large'>
              {(plans as PlansObject)[planKey].map((item, index)  => (
                <div key={index} className='flex mx-auto'>
                  <span>{item.title}</span>
                  <span>{item.description}</span>
                </div>
              ))}
    </div>
  );
};

export default Plans
