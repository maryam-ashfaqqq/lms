import { Palette, BarChart3, Code, TrendingUp, Smartphone,ShieldCheck } from 'lucide-react'
import Card from '@/components/card'

export default function HomePage() {
  const courses = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      description: "Master Figma, Design Systems, and User Research. Go from beginner to Pro Designer with real projects.",
      price: "Rs. 15,000",
      icon: <Palette className="w-12 h-12 text-[#FACC15]" />
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Learn Pandas, NumPy, and Machine Learning. Build real-world projects and become a Data Scientist.",
      price: "Rs. 25,000",
      icon: <BarChart3 className="w-12 h-12 text-[#FACC15]" />
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description: "Build complete web applications using React, Next.js, Node.js, and Databases. From zero to deployment.",
      price: "Rs. 30,000",
      icon: <Code className="w-12 h-12 text-[#FACC15]"  />
    },
    {
      id: 4,
      title: "Digital Marketing Pro",
      description: "Master SEO, Facebook Ads, Google Ads, and Content Strategy to grow any brand online.",
      price: "Rs. 12,000",
      icon: <TrendingUp className="w-12 h-12 text-[#FACC15]"  />
    }, 
    {
      id: 5,
      title: "Mobile App Development",
      description: "Learn React Native to build apps for both Android and iOS from a single codebase.",
      price: "Rs. 28,000",
      icon: <Smartphone className="w-12 h-12 text-[#FACC15]" />
    },
    {
  id: 6,
  title: "Cybersecurity Essentials",
  description: "Learn Ethical Hacking, Network Security, and how to protect systems from cyber threats. Become a Security Analyst.",
  price: "Rs. 22,000",
  icon: <ShieldCheck className="w-12 h-12 text-[#FACC15]" />
}
  ]

  return (<>
  
     <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card key={course.id} {...course} />
        ))}
      </div>
    </div>
    </>
  )
}