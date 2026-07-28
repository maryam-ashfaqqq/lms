import CardSection from "@/components/cardSection"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F4]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#79443B] mb-10">
          All Courses
        </h1>
        
        <CardSection showDetails={true} />
       
      </div>
    </main>
  )
}