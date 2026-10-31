import { CalendarDays, ChevronDown, Download } from "lucide-react";

const OwnerOrdersPageHeader = () => {
  return (
    <header className="flex justify-between h-10">
      <h1 className="flex items-center text-[24px] font-bold text-gray-950">
        Orders
      </h1>

      <div className="flex gap-3">
        <button
          className="
          rounded-lg
          border border-gray-200
          bg-white
          px-4
          flex items-center gap-2
          text-sm font-medium text-gray-700
          hover:bg-gray-50
        "
        >
          <CalendarDays className="w-4 h-4" />
          May 12, 2026
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        <button
          className="
          rounded-lg
          border border-green-500
          bg-white
          px-4
          flex items-center gap-2
          text-sm font-semibold
          text-green-700
          hover:bg-green-50
          hover:cursor-pointer
        "
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </header>
  );
};

export default OwnerOrdersPageHeader;
