import { CalendarDays, ChevronDown, Download } from "lucide-react";
import { capitalizeWords } from "../../../../shared/utils/capitalizeWords";
import type { UserProfileDTO } from "../../../../shared/api/getMyProfile/userProfile.dto";

interface OwnerOverviewPageHeaderProps {
  userProfile?: UserProfileDTO;
}

const OwnerOverviewPageHeader: React.FC<OwnerOverviewPageHeaderProps> = ({
  userProfile,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between h-10">
        <h1 className="flex items-center text-[24px] font-bold tracking-[-0.7px] text-gray-950">
          Welcome back {capitalizeWords(userProfile?.name)} 👋
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
      </div>
      <p className="text-sm text-gray-500">
        Here's what's happening at your restaurant today.
      </p>
    </div>
  );
};

export default OwnerOverviewPageHeader;
