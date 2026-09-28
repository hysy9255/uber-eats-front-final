import { useState } from "react";
import { SideBarStatus } from "../../shared/types/sideBarStatus.type";
import { getSideBarStatus } from "../../shared/utils/getSideBarStatus";
import {
  layoutVars,
  mainContentsXPosCss,
} from "../../shared/constants/layoutCss";
import { Outlet } from "react-router-dom";
import OwnerNavigationSidebar from "./OwnerNavigationSidebar/OwnerNavigationSidebar";

const OwnerDashboardLayout = () => {
  const [sideBarStatus, setSideBarStatus] = useState<SideBarStatus>(() =>
    getSideBarStatus(window.innerWidth)
  );

  return (
    <div
      className={`min-h-screen select-none`}
      style={
        {
          "--header-height": layoutVars.headerHeight,
          "--full-sidebar-width": layoutVars.fullSideBarWidth,
          "--mini-sidebar-width": layoutVars.miniSideBarWidth,
          "--header-x-padding": layoutVars.headerXPadding,
        } as React.CSSProperties
      }
    >
      <OwnerNavigationSidebar />
      <main
        className={`
      fixed top-0
      right-0 bottom-0
      transition-[left] duration-200 ease-out
      ${mainContentsXPosCss[sideBarStatus]}
      overflow-y-auto
    `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerDashboardLayout;
