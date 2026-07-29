"use client"
import { useState } from "react";
 import Navbar from "@/components/Navbar";
import Login from "@/components/login";
import Footer from "@/components/footer";
export default function SecLayout({ children }: {
  children: React.ReactNode;
}) {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
        {children}
        <Footer/>
    <Login isOpen={showLogin} onClose={()=>setShowLogin(false)} />
      
    </>
  );
}
