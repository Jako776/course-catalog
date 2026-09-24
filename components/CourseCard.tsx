import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
}

export function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="hover:shadow-md hover:border-blue-300 transition">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">{credits} credits</span>
            <Button variant="ghost" size="sm">
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}