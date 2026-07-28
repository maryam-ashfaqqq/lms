import Link from "next/link"
import { courses } from "./courses"

export default function CardSection({ showDetails = false }: { showDetails?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-6 items-stretch">
      {courses.map((course) => (
        <Link href="/courses" key={course.id} className="h-full">
          <div className="bg-[#79443B] rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex-col items-center justify-center text-center cursor-pointer h-full">
            <div className="mb-3">{course.icon}</div>
            
            {showDetails && (
              <>
                <h3 className="font-bold text-white text-lg mb-2">{course.title}</h3>
                <p className="text-white text-sm mb-2 flex-grow">{course.description}</p>
                <p className="font-bold text-white text-base mt-auto">{course.price}</p>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}