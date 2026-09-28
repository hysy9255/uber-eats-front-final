import type { UserRole } from "@/shared/types/userRole.type";
import { ChevronDown, LogOut } from "lucide-react";
import DefaultProfileImg from "../Header/DefaultProfileImg/DefaultProfileImg";

interface FooterProps {
  onLogout: () => void;
  userProfileImage?: string | null;
  userName?: string;
  userRole?: UserRole;
}

const Footer: React.FC<FooterProps> = ({
  onLogout,
  userProfileImage,
  userName,
  userRole,
}) => {
  return (
    <div className="mt-auto">
      <div className="border-t border-gray-200 pt-4">
        <button className="w-full flex items-center gap-x-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition">
          {userProfileImage ? (
            <img
              src={userProfileImage}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <DefaultProfileImg className="w-10 h-10 rounded-full object-cover border border-slate-100" />
          )}

          <div className="flex-1 text-left">
            <div className="text-sm font-semibold text-gray-900">
              {userName}
            </div>

            <div className="text-xs text-gray-500">{userRole}</div>
          </div>

          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="mt-3 border-t border-gray-200 pt-3">
        <button
          onClick={onLogout}
          className="
          w-full
          flex
          items-center
          gap-x-3
          px-3
          py-2.5
          rounded-lg
          text-gray-700
          hover:bg-gray-50
          transition
          hover:cursor-pointer
        "
        >
          <LogOut className="w-5 h-5" />

          <span className="text-[15px] font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
