import type { Metadata } from "next";
import {Karla} from 'next/font/google'
import "./globals.css";
import { connectToMongoDB } from "@/db/connection";

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cakrawala Kata",
  description: "Hidupkan Bahasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB()
  return (
    <html lang="en">
      <body
        className={` ${karla.className} bg-slate-800 mx-8 my-4`}
      >
        {children}
      </body>
    </html>
  );
}
