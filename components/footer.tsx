import Link from "next/link";
export default function Footer() {
  return (
    <>
    <footer className="bg-[#E8DDD4] text-gray-800 py-4 px-6 justify-between items-center text-[#0F172A] text-xs border-[#8F8170] text-center"> 
      <div className="md:col-span-1"> 
       <h3 className="text-3xl font-bold mb-3">EDUHub</h3>
      <p className="text-[#0F172A] text-sm loading-7 mb-4">
    EduHub - Learn new skills online. Access courses, tutorials and expert teachers. Study anytime, anywhere and build your future with us.Learn anywhere,anytime with high-quality online courses.
      </p>
     </div> 
     <Link href="/privacy" className="hover:text-[#3D2B1F] text-[#0F172A] text-sm border-[#8F8170] py-6 text-center">Privacy Policy </Link> 
    
    </footer> 
    </>
  );
}
