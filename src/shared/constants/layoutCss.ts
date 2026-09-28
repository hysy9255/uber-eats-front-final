import { SideBarStatus } from "../types/sideBarStatus.type";

export const layoutVars = {
  headerHeight: "56px",
  fullSideBarWidth: "240px",
  miniSideBarWidth: "72px",
  headerXPadding: "16px",
};

export const headerHeight = "h-[var(--header-height)]";
export const headerXPadding = "px-[var(--header-x-padding)]";
export const drawerLogoLeftPadding = "pl-[var(--header-x-padding)]";

export const sideBarAndMainContentsYPos = "top-[var(--header-height)]";

export const mainContentsXPosCss: Record<SideBarStatus, string> = {
  [SideBarStatus.FullBar]: `left-[var(--full-sidebar-width)]`,
  [SideBarStatus.MiniBar]: `left-[var(--mini-sidebar-width)]`,
  [SideBarStatus.Collapsed]: `left-[0px]`,
};

export const sideBarSizeCss: Record<SideBarStatus, string> = {
  [SideBarStatus.FullBar]: `w-[var(--full-sidebar-width)] p-[12px]`,
  [SideBarStatus.MiniBar]: `w-[var(--mini-sidebar-width)] px-[4px]`,
  [SideBarStatus.Collapsed]: `hidden`,
};
