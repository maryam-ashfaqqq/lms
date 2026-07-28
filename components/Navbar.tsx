
import Link from 'next/link'

export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
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
        <Link href="/login" className="bg-[#9F8170] text--[#EFDECD] px-5 py-2 rounded-lg font-bold hover:bg-[#79443B] transition-all">
<button onClick={onLoginClick}>Login</button>

        </Link>
      </div>
    </nav>
  )
}