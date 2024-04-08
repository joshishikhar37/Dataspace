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

       
  
      <section className="">
        <h1 className='flex justify-center text-4xl pt-36'>Our Popular Plans & Pricing</h1>
        <div className="flex justify-between mx-16">
          <Plans/>
          <Plans/>
          <Plans/>
          <Plans/>
        </div>
      </section> 
      <section>
      <h1 className='flex justify-center text-3xl pb-7'>Our Valued Costumers</h1>
      
      </section>
    

    </div>
  );
}
