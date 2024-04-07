import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Plans from "@/components/Plans";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dataspace",
  description: "balls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={poppins.className}>
      <body className="flex-col">
        <div className="  w-full">

        <NavBar />

        </div>

        <main className="">{children}</main>
        

        <Footer />
      </body>
    </html>
  );
}
