interface InfoRowProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  right?: React.ReactNode;
  showArrow?: boolean;
  onClick?: () => void;
}

export const InfoRow: React.FC<InfoRowProps> = ({
  icon,
  title,
  value,
  right,
  showArrow,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
          min-h-[56px]
          px-5
          flex items-center
          border-b border-gray-200
          last:border-b-0
          ${onClick ? "hover:bg-gray-50 hover:cursor-pointer" : ""}
        `}
    >
      <div className="w-[200px] flex items-center gap-x-3 text-gray-700">
        <div className="text-gray-500">{icon}</div>
        <div className="text-xs font-medium">{title}</div>
      </div>

      <div className="flex-1 text-xs text-gray-600">{value}</div>

      {right}

      {showArrow && <div className="text-gray-500 text-lg ml-3">›</div>}
    </div>
  );
};
