interface DishInfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  last?: boolean;
}

export const DishInfoRow: React.FC<DishInfoRowProps> = ({
  icon,
  label,
  value,
  last = false,
}) => {
  return (
    <div
      className={`grid grid-cols-[28px_160px_1fr] items-center gap-2 py-4 px-3 ${
        last ? "" : "border-b border-gray-100"
      }`}
    >
      <div className="text-gray-500">{icon}</div>
      <span className="font-semibold text-gray-700 text-xs">{label}</span>
      <div className="text-right text-gray-600 text-xs">{value}</div>
    </div>
  );
};
