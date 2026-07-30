export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] py-16 px-6">
      <div className="max-w-3xl mx-auto bg-[#FFFCF9] rounded-2xl shadow-lg p-10 border-[#EAD9CF">
        
        <h1 className="text-4xl font-bold text-center text-[#79443B] mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-2xl">📧</span>
            <div className=" min-w-0 flex-1"> 
              <p className="font-semibold text-[#79443B] ">Email</p>
              <a 
                href="mailto:maryamashfaqqq@gmail.com" 
                className="text-[#79443B] hover:underline break-words"
              >
                maryamashfaqqq@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-2xl">💼</span>
            <div>
              <p className="font-semibold text-[#79443B]">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/maryam-ashfaqqq"
                target="_blank" 
                rel="noreferrer"
                className="text-[#79443B] hover:underline"
              >
             linkedin.com/in/maryam-ashfaqqq
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-[#79443B]">Location</p>
              <p className="text-[#79443B]">Lahore, Pakistan</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 p-4 bg-[#F2E6DD] rounded-lg hover:[#EAD9CF] transition">
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold text-[#79443B]">GitHub</p>
              <a 
               
                href="https://github.com/maryam-ashfaqqq"
                target="_blank" 
                rel="noreferrer"
                className="text-[#79443B] hover:underline"
              >
                github.com/maryam-ashfaq
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}