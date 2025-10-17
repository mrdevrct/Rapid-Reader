import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ListItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

function ListItem({ href, icon, title }: ListItemProps) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-primary">
            {icon}
          </div>
          <div className="text-md text-gray-700">{title}</div>
        </div>
        <div className="text-gray-400">
          <ChevronLeft className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
