"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from "lucide-react"
export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  const[isOpen ,setIsOpen] = useState(false)
  return (
   <nav className="bg-[#9F8170] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
      <Link href="/" className="text-2xl font-bold text-[#0F172A]">EDU<span className="text-[#592720]">Hub</span></Link>
        
         <div className="hidden md:flex gap-10">
        <Link href="/" className="text-gray-800 font-medium hover:text-[#592720] border-b-2 border-transparent hover:border-[#592720] pb-1 transition-all">
            Home
          </Link>
          <Link href="/courses" className="text-gray-800 font-medium hover:text-[#592720] border-b-2 border-transparent hover:border-[#592720] pb-1 transition-all">
            Courses
          </Link>
          <Link href="/about" className="text-gray-800 font-medium hover:text-[#592720] border-b-2 border-transparent hover:border-[#592720] pb-1 transition-all">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 font-medium hover:text-[#592720] border-b-2 border-transparent hover:border-[#592720] pb-1 transition-all">
            Contact
          </Link>
        </div>   
        <div className='flex items-center gap-4'> 
<button onClick={onLoginClick}className="bg-[#592720] text-[#EFDECD]  hidden md:block px-5 py-2 rounded-lg font-bold hover:bg-[#79443B] transition-all">Login

</button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
          </button>
        </div>
     </div> 

      
      {isOpen && (
        <div className="md:hidden bg-[#EFDECD] px-6 py-5 flex flex-col gap-2 border-[#d4c4b8]">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-[#0F172A] font-medium py-3 px-2 hover:bg-[#f5e9e0] rounded-lg transition">Home</Link>
          <Link href="/courses" onClick={() => setIsOpen(false)} className="text-[#0F172A] font-medium py-3 px-2 hover:bg-[#f5e9e0] rounded-lg transition">Courses</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#0F172A] font-medium py-3 px-2 hover:bg-[#f5e9e0] rounded-lg transition">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[#0F172A] font-medium py-3 px-2 hover:bg-[#f5e9e0] rounded-lg transition">Contact</Link>
        
                    <button 
            onClick={() => {onLoginClick(); setIsOpen(false)}} 
            className="bg-[#592720] text-[#EFDECD] px-2 py-3 rounded-lg font-bold w-full hover:bg-[#f5e9e0] transition "
          >Login </button>
           
        </div>
      )}
    </nav>
  )
}