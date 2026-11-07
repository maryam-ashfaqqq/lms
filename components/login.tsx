"use client"
import {useRouter} from "next/navigation"
import { useState } from "react";
export default function Login({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const router = useRouter();
const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  if (!isOpen) return null;
const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      console.log(data)

      if (data.message === "Login Successful") {
        localStorage.setItem("token", data.token)
        alert("Login Successful " + data.user.name)
        onClose();
        router.push("/courses");    
      } else {
        alert(data.message) 
      }
    } catch (err) {
      alert("Error")
    }
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-[#79443B]">
      <div className="bg-[#FFFCF9] rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
    
        <button onClick={onClose}
        className="top-4 right-4 text-2xl text-[#79443B]  font-extrabold hover:text-[#79443B]"
        >
          ←
        </button>

        <h2 className="text-3xl font-bold text-center text-[#79443B] mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4 flex flex-col gap-4">
                 
          <div>
            <label className="block text-[#79443B] font-semibold mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="username@gmail.com" className="w-full px-4 py-3 border border-[#EAD9CF] rounded-lg" />
          </div>

         
          <div>
            <label className="block text-[#79443B] font-semibold mb-2">Password</label>
            <input 
              type="password" 
              value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" className="w-full px-4 py-3 border border-[#EAD9CF] rounded-lg" />
          </div>

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

