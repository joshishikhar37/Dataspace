"use client";

import Link from "next/link";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Herosection from "@/components/herosection";
import NavBar from "@/components/NavBar";
import Plans from "@/components/Plans";
import Valuablecustomer from "@/components/valuablecustomer";
import SearchDomain from "@/components/searchDomain";

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
    <div className="flex-col text-black relative">
      <div className="mb-64">
        <Herosection />
      </div>

      <div className="absolute top-[31%] w-full">
        <SearchDomain />
      </div>

      <section className="">

        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        <div className="mx-16 mb-28">
          <Plans />
        </div>
      </section>
      <section className="mb-28">
        <h1 className="flex justify-center text-4xl pb-10">
          Our Valued Costumers
        </h1>
        <Valuablecustomer />
      </section>
    </div>
  );
}
