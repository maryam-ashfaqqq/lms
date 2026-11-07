"use client"
export default function Header({ onLoginClick }:  { onLoginClick: () => void }) {
  return (
     <section className="bg-linear-to-r from-[#3D2B1F] to-[#79443B] text-white py-6 px-6">
      <div className="container mx-auto max-w-4xl text-left">
        
        
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 text-white">
          Enable Learning Management System
        </h1>

       
        <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl">
          Build and scale your online courses with the most powerful LMS platform. 
          Create engaging lessons, track student progress, and manage everything from one dashboard. 
          Perfect for schools, universities, and training institutes. 
          Start teaching smarter and grow your business with EnableLMS.
        </p>

         <button onClick={onLoginClick}className="bg-[#9F8170] text-[#EFDECD] px-6 py-2 rounded-lg font-bold text-base hover:bg-[#79443B] hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button> 
        

      </div>
    </section>
  )
}