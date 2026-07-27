'use client'

import { BookOpen, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-[#0F172A] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <BookOpen className="w-9 h-9 text-[#FACC15]" />
            <h1 className="text-2xl font-bold">
              EDU <span className="text-[#FACC15]">Hub</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="hover:text-[#FACC15] transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-[#FACC15] hover:bg-[#eab308] text-[#0F172A] px-5 py-2 rounded-lg font-bold transition-all duration-200 shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#FACC15] transition-colors duration-200 py-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-[#FACC15] hover:bg-[#eab308] text-[#0F172A] px-5 py-2 rounded-lg font-bold mt-2">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}