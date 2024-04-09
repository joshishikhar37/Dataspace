import React from "react";

const Contactform = () => {
  return (
    <section className="w-[84%]  border-2 px-6 py-6  rounded-xl overflow-hidden shadow-xl  ">
      <div className=" relative pl-12 py-14 text-start bg-[#0D5077] w-[42%] text-white rounded-l-xl overflow-hidden">
        <div className="h-32 w-32 absolute top-[70%] left-[72%] rounded-full bg-[#11396e71]"></div>
        <div className="h-60 w-60 absolute top-[75%] left-[75%] rounded-full bg-[#113A6E]"></div>
        <h1 className="text-4xl font-extrabold">Contact Information</h1>
        <h2 className="text-2xl font-light py-6">
          Feel free to contact us in case of problem
        </h2>

        <div className="flex gap-8 mt-24 text-xl items-start align-text-bottom ">
          <img src="Vector.png" alt="" className="h-9 w-8" />{" "}
          <p>+123 456 7890</p>
        </div>
        <div className="flex gap-8 mt-16 text-xl items-start align-text-bottom   ">
          <img src="/inbox-icon.png" alt="" className="h-5 w-6 " />
          <p>demo@gmail.com</p>
        </div>
        <div className="flex gap-8 mt-16 mb-48 text-xl items-start align-text-bottom   ">
          <img src="/location-icon.png" alt="" className="h-8 w-8" />
          <p>Putalisadak, ktm NP</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Contactform;
