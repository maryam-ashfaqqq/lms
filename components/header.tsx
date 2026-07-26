import Link from "next/link" 
import { User, Search } from 'lucide-react'
export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
         <User size ={24}/>
         
          
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span style={{fontSize:30, fontWeight:40}}>Maryam</span>
          <span style={{fontSize:20}}>Library</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/courses">Courses</Link>
          <Link href="/services">Services</Link>
          <Link href="/lms">Enable LMS</Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span>🔍
             <Search size ={24}/></span> {/* micro/search icon */}
          <Link href="/login">Login</Link>
          <span>🛒</span> {/* Basket icon */}
        </div>

      </nav>
    </header>
  );
}