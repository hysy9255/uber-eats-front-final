import { Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const SettingTab = () => {
  return (
    <NavLink
      to="/dashboard/settings"
      className={({ isActive }) =>
        `
      mt-3
      min-h-[46px]
      px-3
      rounded-xl
      flex
      items-center
      gap-x-3
      transition-all
      ${
        isActive
          ? "bg-green-50 text-green-700"
          : "text-gray-700 hover:bg-gray-50"
      }
    `
      }
    >
      <Settings className="w-5 h-5" />

      <span className="text-[15px] font-medium">Settings</span>
    </NavLink>
  );
};

export default SettingTab;
