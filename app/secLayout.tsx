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
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={() => setShowLogin(true)} />
        <main className="flex-1">
        {children}
        </main>
      
         <Footer/> 
    <Login isOpen={showLogin} onClose={()=>setShowLogin(false)} />
     </div>
    </>
  );
}
