import Image from "next/image";

interface CourseCardProps {
  course: { id: number; title: string; coverImage: string; progress: number };
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition p-2">
      <Image
        src={course.coverImage}
        alt={course.title}
        width={400}
        height={250}
        className="w-full h-44 object-cover rounded-lg"
      />
      <div className="mt-2">
        <h3 className="text-base font-bold text-gray-800 mb-2">{course.title}</h3>
        <div className="text-xs text-gray-500 mb-2">پیشرفت: {course.progress}%</div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-primary-deep h-1.5 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
