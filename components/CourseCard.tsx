import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block p-5 border border-gray-200 rounded-xl bg-white hover:shadow-md transition"
    >
      <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 font-medium">
        <span>Credits: {credits}</span>
        <span>❤ {likes}</span>
      </div>
    </Link>
  );
}