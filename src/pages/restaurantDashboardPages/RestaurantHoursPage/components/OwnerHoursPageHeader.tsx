import { Copy } from "lucide-react";

interface OwnerHoursPageHeaderProps {
  copyMondayHours: () => void;
}

const OwnerHoursPageHeader: React.FC<OwnerHoursPageHeaderProps> = ({
  copyMondayHours,
}) => {
  return (
    <header className="flex flex-col">
      <div className="h-10 flex justify-between">
        <h1 className="flex items-center text-[24px] font-bold tracking-[-0.5px] text-gray-950">
          Hours
        </h1>

        <button
          onClick={copyMondayHours}
          className="
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
          hover:cursor-pointer
        "
        >
          <Copy className="w-4 h-4" />
          Apply Monday’s hours to all days
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Set when your restaurant is open for delivery and pickup.
      </p>
    </header>
  );
};

export default OwnerHoursPageHeader;
