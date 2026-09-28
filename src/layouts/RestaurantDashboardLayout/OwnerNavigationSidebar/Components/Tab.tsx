import { NavLink } from "react-router-dom";
import type { TabOptionType } from "../constants/tabOption.type";

interface TabProps {
  tab: TabOptionType;
}

const Tab: React.FC<TabProps> = ({ tab }) => {
  const Icon = tab.icon;
  return (
    <NavLink
      key={tab.path}
      to={tab.path}
      className={({ isActive }) =>
        `
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
      {({ isActive }) => (
        <>
          <Icon
            className={`
          w-5 h-5
          ${isActive ? "text-green-800" : "text-gray-600"}
        `}
          />

          <span className="flex-1 text-[15px] font-medium">{tab.label}</span>

          {tab.badge !== undefined && (
            <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-semibold">
              {tab.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
};

export default Tab;
