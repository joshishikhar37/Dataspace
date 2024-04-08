import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Buttoncart from "@/components/buttoncart";
import plans from "@/assets/plans.json";

type PlanCategory = {
  title: string;
  description: string;
};

type PlansObject = {
  [key: string]: PlanCategory[];
};

const Plans = () => {
  const imagestyles = {
    width: "308px",
    height: "113.34px"
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust this according to the number of plans you want to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...sliderSettings}>
      {Object.keys(plans).map((planKey: keyof PlansObject) => (
        <div key={planKey} className=' rounded-lg w- shadow-xl'>
          <div className='relative flex justify-center'>
            <img src="/plans.png" alt="footerimage" style={imagestyles} className='rounded-t-lg' />
            <h1 className='absolute top-[60%] px-6 text-white font-black '>{planKey}</h1>
          </div>
          <div>
            <div className='text-black flex flex-col gap-1 py-2 font-large'>
              {(plans as PlansObject)[planKey].map((item, index) => (
                <div key={index} className='flex mx-auto'>
                  <span>{item.title}</span>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
            <div className='flex justify-center hover:scale-105'>
              <Buttoncart />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Plans;
