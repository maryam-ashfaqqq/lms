import Link from "next/link";
export default function AboutPage() {
  return (
     <section className="min-h-screen bg-gray-50 py-16">
    <div className="container mx-auto px-4 py-4">
  
  
        <div className="max-w-6xl mx-auto px-6">
<Link href="/" className="text-2xl font-extrabold text-[#79443B] hover:scale-110 transition">←</Link> 
        <div className="text-center mb-12">
          
          <h1 className="text-4xl font-bold text-[#79443B] ">
            About EDUHub
          </h1>

          <p className="mt-5 text-lg text-[#79443B]  max-w-3xl mx-auto leading-8">
            EDUHub is a modern Learning Management System designed to make
            online education simple, interactive, and accessible. Our goal is
            to connect learners with high-quality courses and provide an
            engaging learning experience for students, educators, and
            institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#79443B]  mb-4">
              Our Mission
            </h2>

            <p className="text-[#79443B]  leading-8 mb-4">
              We believe that education should be available to everyone,
              everywhere. EDUHub provides an intuitive platform where learners
              can discover courses, track their progress, and develop new
              skills with confidence.
            </p>

            <p className="text-[#79443B]  leading-8">
              This project is built using modern web technologies including
              Next.js, TypeScript, and Tailwind CSS, focusing on performance,
              responsive design, and a clean user experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#79443B] ">
              Why Choose EDUHub?
            </h3>

            <ul className="space-y-4 text-[#79443B] ">
              <li>📚 High-quality learning experience</li>
              <li>🎓 Expert-designed courses</li>
              <li>📈 Track your learning progress</li>
              <li>💻 Modern and responsive interface</li>
              <li>⚡ Built with Next.js & TypeScript</li>
            </ul>
          </div>

        </div>

      </div></div>
    </section>
  );
}