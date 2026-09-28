import { SideBarStatus } from "../types/sideBarStatus.type";

export const getSideBarStatus = (width: number): SideBarStatus => {
  if (width > 1300) {
    return SideBarStatus.FullBar;
  }
  if (width > 790) {
    return SideBarStatus.MiniBar;
  }
  return SideBarStatus.Collapsed;
};
