"use client"
import { useState } from "react";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Login from "@/components/login";
import Hero from "@/components/hero"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 const inter =Inter({subsets: ["latin"]})
// export const metadata: Metadata = {
//   title: "LMS Website",
//   description: "Learning Management System",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <html
      lang="en">
    <body className={inter.className}>
      <Navbar onLoginClick={() => setShowLogin(true)} />
        <Hero onGetStartedClick={() => setShowLogin(true)}/>
        <Login isOpen={showLogin} onClose={()=>setShowLogin(false)} />
      {children}
      </body>
    </html>
  );
}
