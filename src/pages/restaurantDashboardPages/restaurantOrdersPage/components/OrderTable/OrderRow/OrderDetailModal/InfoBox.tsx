interface InfoBoxProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
}

export const InfoBox = ({ icon, label, value }: InfoBoxProps) => {
  return (
    <div
      className="
          rounded-xl
          border
          border-gray-200
          bg-gray-50
          p-4
        "
    >
      <div className="flex items-center gap-2 text-gray-500">
        {icon}

        <span className="text-xs font-medium">{label}</span>
      </div>

      <p className="mt-2 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
};
