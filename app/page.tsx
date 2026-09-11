import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Course Catalog</h1>
      <p className="text-gray-600">
        Welcome to the course catalog! Browse our web development and backend modules.
      </p>
      <div>
        <Link
          href="/courses"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Courses
        </Link>
      </div>
    </section>
  );
}