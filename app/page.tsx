"use client"
 import Link from "next/link";
 import { useState } from "react";
import Header from "@/components/header";
import CardSection from "@/components/cardSection"
import Login from "@/components/login";
import "./globals.css"


export default function Page() {
  
const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      <Header onLoginClick={() => setShowLogin(true)}/> 
     {/* <Header onClick={showLogin} /> */}
 <Login isOpen={showLogin} onClose={()=>setShowLogin(false)} />
     <CardSection/>
    
    </>
  );
}
