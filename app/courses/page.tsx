import { getCourses } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}