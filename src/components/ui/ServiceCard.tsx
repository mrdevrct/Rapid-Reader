function ServiceCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="bg-primary-deep rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col items-center gap-1">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary">
        {icon}
      </div>
      <div className="text-base font-medium text-white">{title}</div>
    </div>
  );
}

export default ServiceCard;
