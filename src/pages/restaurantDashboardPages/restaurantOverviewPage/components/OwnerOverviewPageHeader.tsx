import { CalendarDays, Download } from "lucide-react";
import { capitalizeWords } from "../../../../shared/utils/capitalizeWords";
import type { UserProfileDTO } from "../../../../shared/api/getMyProfile/userProfile.dto";

interface OwnerOverviewPageHeaderProps {
  userProfile?: UserProfileDTO;
}

const OwnerOverviewPageHeader: React.FC<OwnerOverviewPageHeaderProps> = ({
  userProfile,
}) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-[27px] font-bold tracking-[-0.7px] text-gray-950">
          Welcome back {capitalizeWords(userProfile?.name)} 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening at your restaurant today.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="h-11 px-4 rounded-xl border border-gray-200 bg-white flex items-center gap-2 text-sm font-medium text-gray-800 hover:bg-gray-50">
          <CalendarDays className="w-4 h-4" />
          May 12 – May 18, 2026
        </button>

        <button className="h-11 px-4 rounded-xl border border-green-600 text-green-700 bg-white flex items-center gap-2 text-sm font-semibold hover:bg-green-50">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </div>
  );
};

export default OwnerOverviewPageHeader;
