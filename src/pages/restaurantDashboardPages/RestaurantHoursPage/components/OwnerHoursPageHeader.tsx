import { Copy } from "lucide-react";

interface OwnerHoursPageHeaderProps {
  copyMondayHours: () => void;
}

const OwnerHoursPageHeader: React.FC<OwnerHoursPageHeaderProps> = ({
  copyMondayHours,
}) => {
  return (
    <header className="flex items-start justify-between">
      <div>
        <h1 className="text-[24px] font-bold tracking-[-0.5px] text-gray-950">
          Hours
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Set when your restaurant is open for delivery and pickup.
        </p>
      </div>

      <button
        onClick={copyMondayHours}
        className="
      h-10
      rounded-lg
      border border-gray-200
      bg-white
      px-4
      flex items-center
      gap-2
      text-sm
      font-medium
      text-gray-700
      hover:bg-gray-50
    "
      >
        <Copy className="w-4 h-4" />
        Copy hours
      </button>
    </header>
  );
};

export default OwnerHoursPageHeader;
