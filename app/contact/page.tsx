import Link from "next/link"
export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto bg-[#FFFFF9] rounded-2xl shadow-lg p-4 md:p-8 border-[#EAD9CF]">
      <div className="container mx-auto px-4 py-4">
  <Link href="/" className="text-2xl font-extrabold text-[#79443B] hover:scale-110 transition">←</Link>
  
        <h1 className="text-4xl font-bold text-center text-[#79443B] mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
        </p>

        <div className="space-y-3 w-full ">
         
          {/* Email */}
          <div className="flex items-center gap-2 py-2 w-full p-3 bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-xl shrink-0">📧</span>
            <div className=" min-w-0 flex-1"> 
              <p className="font-semibold text-[#79443B] text-sm break-words">Email</p>
              <a 
                href="mailto:maryamashfaqqq@gmail.com" 
                className="text-[#79443B] text-sm break-words hover:underline break-words"
              >
                maryamashfaqqq@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-2 py-2 p-3 w-full bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-xl shrink-0">💼</span>
            <div>
              <p className="font-semibold text-[#79443B]">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/maryam-ashfaqqq"
                target="_blank" 
                rel="noreferrer"
                className="text-[#79443B] text-sm break-words hover:underline"
              >
             linkedin.com/in/maryam-ashfaqqq
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 py-2 p-3 w-full bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-xl flex-shrink-0">📍</span>
            <div>
              <p className="font-semibold text-[#79443B]">Location</p>
              <p className="text-[#79443B] text-sm break-words">Lahore, Pakistan</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-2 py-2 p-3 w-full bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-xl shrink-0">💻</span>
            <div>
              <p className="font-semibold text-[#79443B]">GitHub</p>
              <a 
               
                href="https://github.com/maryam-ashfaqqq"
                target="_blank" 
                rel="noreferrer"
                className="text-[#79443B] text-sm break-words hover:underline"
              >
                github.com/maryam-ashfaq
              </a>
            </div>
          </div>

        </div>
      </div></div>
    </main>
  )
}