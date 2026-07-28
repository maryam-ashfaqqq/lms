import Link from 'next/link'
import { ReactNode } from 'react'

type CourseCardProps = {
  title: string
  description: string
  price: string
  icon: ReactNode
}

export default function Card({ title, description, price, icon }: CourseCardProps) {
  return (
     <div className="border border-[#E2E8F0] rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-[#9F8170]
     p-6 space-y-4">
      
      <div className="bg-[#EFF6FF] w-14 h-14 rounded-xl flex items-center justify-center">
        <div className="text-[#2563EB]">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-[#3D2B1F]">{title}</h3>

      {/* Description */}
      <p className="text-[#3D2B1F] leading-relaxed flex-grow">{description}</p>
      
      {/* Price + Button */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-2xl font-extrabold text-[#3D2B1F]">{price}</span>
        <Link 
          href="#" 
          className="bg-[#9F8170] text-[#EFDECD] px-5 py-2 rounded-lg font-bold hover:bg-[#3D2B1F] transition-all shadow-md"
        >
          Enroll
        </Link>
      </div>

    </div>
  )
}