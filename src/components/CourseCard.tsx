import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="course-card border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{course.title}</h2>
    </div>
  );
}