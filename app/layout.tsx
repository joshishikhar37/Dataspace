import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import footer from "@/components/footer";

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
      <body>
        <main>{children}</main>
        <footer/>
      </body>
    </html>
  );
}
