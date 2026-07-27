// import { ReactNode } from 'react'

// // Type define کر دیا
// type CourseCardProps = {
//   title: string
//   description: string  
//   price: string
//   icon: ReactNode
// }

// export default function Card({ title, description, price, icon }: CourseCardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-[#FACC15]">
//      <div 
//   className="h-48 flex items-center justify-center"
//   style={{ background: 'linear-gradient(to bottom right, #0F172A, #1E293B)' }}
// >{icon}</div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-[#FACC15] font-bold text-lg">{price}</span>
//           <button className="bg-[#0F172A] text-white px-4 py-2 rounded-lg hover:bg-[#FACC15] hover:text-[#0F172A] font-semibold transition-all">
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


import Link from 'next/link'
import { ReactNode } from 'react'

// Type define کر دیا
type CourseCardProps = {
  title: string
  description: string  
  price: string
  icon: ReactNode
}
 export default function Card({ title, description, price, icon }: CourseCardProps) {
  return (
    <div className="border border-[#E2E8F0] rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white group">
      
      {/* Card Header - نیلا Gradient + سنہری Border */}
      <div 
        className="h-48 flex items-center justify-center border-b-4"
        style={{ 
          background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
          borderColor: '#FACC15'
        }}
      >
        <div className="text-[#FACC15] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 h-20">{description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-[#FACC15]">{price}</span>
          <Link 
            href="#" 
            className="bg-[#1E3A8A] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#3B82F6] transition-colors"
          >
            Enroll
          </Link>
        </div>
      </div>
    </div>
  )
}
