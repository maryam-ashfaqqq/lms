export default function Header() {
  return (
     <section className="bg-gradient-to-r from-[#3D2B1F] via-[#79443B] to-[#9F8170] text-white py-12 px-6">
      <div className="container mx-auto max-w-4xl text-left">
        
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Enable Learning Management System
        </h1>

       
        <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
          Build and scale your online courses with the most powerful LMS platform. 
          Create engaging lessons, track student progress, and manage everything from one dashboard. 
          Perfect for schools, universities, and training institutes. 
          Start teaching smarter and grow your business with EnableLMS.
        </p>

        {/* Get Started Button */}
        <button className="bg-[#9F8170] text-[#EFDECD] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#79443B] hover:scale-105 transition-all duration-300 shadow-xl">
          Get Started
        </button>

      </div>
    </section>
  )
}