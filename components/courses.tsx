import { Palette, BarChart3, Code, TrendingUp, Smartphone, ShieldCheck ,Cloud , Brush ,Bot ,Database } from 'lucide-react'
// import Card from './card'
import Link from 'next/link'
import {ReactNode} from 'react'
  export type Course = {
  id: number
  title: string
  description: string
  price: string
  icon: ReactNode
}

export const courses: Course[] = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      description: "Master Figma, Design Systems, and User Research. Go from beginner to Pro Designer.",
      price: "Rs. 15,000",
      icon: <Palette className="w-10 h-10 text-[#EDC9AF" />
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Learn Pandas, NumPy, and Machine Learning. Build real-world projects.",
      price: "Rs. 25,000",
      icon: <BarChart3 className="w-10 h-10 text-[#EDC9AF]" />
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description: "Build complete web applications using React, Next.js, Node.js, and Databases.",
      price: "Rs. 30,000",
      icon: <Code className="w-10 h-10 text-[#EDC9AF]" />
    },
    {
      id: 4,
      title: "Digital Marketing Pro",
      description: "Master SEO, Facebook Ads, Google Ads, and Content Strategy to grow any brand.",
      price: "Rs. 12,000",
      icon: <TrendingUp className="w-10 h-10 text-[#EDC9AF]" />
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Learn React Native to build apps for both Android and iOS from a single codebase.",
      price: "Rs. 28,000",
      icon: <Smartphone className="w-10 h-10 text-[#EDC9AF]" />
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      description: "Learn Ethical Hacking, Network Security, and how to protect systems from threats.",
      price: "Rs. 22,000",
      icon: <ShieldCheck className="w-10 h-10 text-[#EDC9AF]" />
      
    },
{
  id: 7,
  title: "Python for Data Science",
  description: "Master Python, Pandas, NumPy and Matplotlib to analyze data and build ML models.",
  price: "Rs. 25,000",
  icon: <BarChart3 className="w-10 h-10 text-[#EDC9AF]" />
},
{
  id: 8,
  title: "AWS Cloud Computing",
  description: "Learn EC2, S3, Lambda and Deploy scalable applications on Amazon Web Services.",
  price: "Rs. 35,000",
  icon: <Cloud className="w-10 h-10 text-[#EDC9AF]" />
},
{
  id: 9,
  title: "Graphic Dsg Mastery",
  description: "Master Adobe Photoshop, Illustrator and Canva to create stunning visuals and brands.",
  price: "Rs. 15,000",
  icon: <Brush className="w-10 h-10 text-[#EDC9AF]" />
},
{
  id: 10,
  title: "Flutter App Development",
  description: "Build beautiful cross-platform mobile apps for Android and iOS using Flutter & Dart.",
  price: "Rs. 30,000",
  icon: <Smartphone className="w-10 h-10 text-[#EDC9AF]" />
},
{
  id: 11,
  title: "AI & ChatGPT Automation",
  description: "Learn how to use AI, ChatGPT and Automation tools to boost productivity and business.",
  price: "Rs. 20,000",
  icon: <Bot className="w-10 h-10 text-[#EDC9AF]" />
},
{
  id: 12,
  title: "Blockchain & Web3 Development", 
  description: "Learn Solidity, Smart Contract and DApps from scratch",
  price:"Rs. 35,000",
   icon: <Database className="w-10 h-10 text-[#EDC9AF]" />
},
  ]