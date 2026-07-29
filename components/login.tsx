"use client"
import Navbar from "@/components/Navbar"
export default function Login({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#FFFCF9] rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        
        <button onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-[#79443B]"
        >
          X
          {/* × */}
        </button>

        <h2 className="text-3xl font-bold text-center text-[#79443B] mb-6">Login</h2>
        
        <form className="space-y-4">
         
          <div>
            <label className="block text-[#79443B] font-semibold mb-2">Name</label>
            <input 
              type="text" 
              placeholder="اپنا نام لکھیں"
              className="w-full px-4 py-3 border border-[#EAD9CF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79443B]"
            />
          </div>

          
          <div>
            <label className="block text-[#79443B] font-semibold mb-2">Email</label>
            <input 
              type="email" 
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-[#EAD9CF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79443B]"
            />
          </div>

         
          <div>
            <label className="block text-[#79443B] font-semibold mb-2">Password</label>
            <input 
              type="password" 
              placeholder="********"
              className="w-full px-4 py-3 border border-[#EAD9CF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#79443B]"
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-[#79443B] text-white py-3 rounded-lg font-bold hover:bg-[#5f352e] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}