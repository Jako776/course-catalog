import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
      <div className="flex justify-between items-start gap-4">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <LikeButton initialLikes={course.likes} />
      </div>
      <p className="text-gray-700 text-lg">{course.description}</p>
      <div className="flex gap-4 text-sm font-medium text-gray-500 border-t pt-4">
        <span>Credits: {course.credits}</span>
        <span>•</span>
        <span>Type: {course.isElective ? "Elective" : "Compulsory"}</span>
      </div>
    </article>
  );
}