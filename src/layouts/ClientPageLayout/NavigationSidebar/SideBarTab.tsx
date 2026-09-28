import { NavLink } from "react-router-dom";
import type { TabOptionType } from "./constants/tabOption.type";
import { SideBarStatus } from "../../../shared/types/sideBarStatus.type";

interface SideBarTabProps {
  tab: TabOptionType;
  status: SideBarStatus;
  optionalLabel?: string;
}

export const SideBarTab: React.FC<SideBarTabProps> = ({
  tab,
  status,
  optionalLabel,
}) => {
  const Icon = tab.icon;
  return (
    <NavLink
      key={tab.path}
      to={tab.path}
      className={({ isActive }) => `
      rounded-lg
      w-full
      hover:cursor-pointer
      font-medium
      ${
        status === SideBarStatus.MiniBar &&
        `    
              h-[76px]
              grid
              grid-rows-[32px_18px]
              content-center
              pt-[16px]
              pb-[14px]
              justify-items-center   `
      }
      ${
        status === SideBarStatus.FullBar &&
        `
              h-[40px]
              grid
              grid-cols-[40px_1fr]
              items-center
              px-[12px]   `
      }
      ${
        isActive
          ? "bg-green-50 text-green-700"
          : "text-gray-700 hover:bg-gray-50"
      }
    `}
    >
      <Icon className="w-[20px] h-[20px] self-center" />
      <div
        className={`
          flex gap-x-1
          ${
            status === SideBarStatus.MiniBar &&
            "text-[11px] leading-[18px] text-center"
          }
          ${status === SideBarStatus.FullBar && "text-[14px]"}
        `}
      >
        <div>{tab.label}</div>
        {optionalLabel && <div>({optionalLabel})</div>}
      </div>
    </NavLink>
  );
};
