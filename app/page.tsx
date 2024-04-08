"use client";

import Link from "next/link";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Herosection from "@/components/herosection";
import NavBar from "@/components/NavBar";
import Plans from "@/components/Plans";


export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("Cookies before removal:", Cookies.get()); // Log cookies before removal
    Cookies.remove("accessToken");
    console.log("accessToken cookie removed");
    console.log("Cookies after removal:", Cookies.get());
  };

  // useEffect(() => {
  //   const accessToken = Cookies.get("accessToken");
  //   if (!accessToken) {
  //     router.push("/login");
  //   }
  // }, []);

  

  return (
    <div className="flex-col text-black" >
      <div className="relative">
        <Herosection />
      </div>
       
      
      <div className=" flex justify-center">
        <section className="py-10 shadow-lg absolute top-[72%] flex-col flex justify-center text-center h-60 w-[65%] rounded-lg bg-white ">
          <h1 className="text-xl font-normal mb-10">
            Find  the  Perfect  Domain  for  your
          </h1>

          <div>
            <input
              type="text"
              placeholder="Search the Domain"
              className="text-m rounded-l-lg shadow-lg w-[70%] h-14  pl-10 border-none"
            />
            <button

              className="text-sm shadow-lg  rounded-r-lg h-14 w-44 text-white bg-[#0D5077] hover:scale-105 "
            >
              Search
            </button>
          </div>
        </section>
      </div>
      <section className="">
        <h1 className='flex justify-center text-4xl pt-36'>Our Popular Plans & Pricing</h1>
        <div className="flex justify-center gap-40 mx-16">
          <Plans/>
          <Plans/>
          <Plans/>
          <Plans/>
        </div>
      </section>
      <section>
      <h1 className='flex justify-center text-3xl pb-7'>Our Valued Costumers</h1>
      
      </section>
      {/* Home page test demo
      <img src="" alt="" />
      <br />
      <Link href="/login">Login page</Link>
      <br />
      <Link href="/register">Register Page</Link>
      <br />
      <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}
