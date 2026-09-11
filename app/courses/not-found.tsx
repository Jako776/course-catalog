import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="text-center py-12 space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Course Not Found</h2>
      <p className="text-gray-600">
        The requested course does not exist in our catalog.
      </p>
      <div>
        <Link
          href="/courses"
          className="text-blue-600 hover:underline font-medium"
        >
          &larr; Back to all courses
        </Link>
      </div>
    </section>
  );
}