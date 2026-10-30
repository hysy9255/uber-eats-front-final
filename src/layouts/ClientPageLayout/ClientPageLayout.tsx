import { NavigationSideBar } from "./NavigationSidebar/NavigationSideBar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import {
  headerHeight,
  headerXPadding,
  layoutVars,
  mainContentsXPosCss,
  sideBarAndMainContentsYPos,
} from "@/shared/constants/layoutCss";
import { useClientPageLayout } from "./useClientPageLayout";

const ClientPageLayout = () => {
  const {
    onClickHamburger,
    sideBarDrawerOpen,
    sideBarStatus,
    setSideBarDrawerOpen,
  } = useClientPageLayout();

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
      <Header
        onClickHamburger={onClickHamburger}
        css={`
        fixed top-0 left-0 
        ${headerHeight} ${headerXPadding}
        bg-white z-10 w-full flex items-center justify-between gap-x-2`}
      />

      <NavigationSideBar
        sideBarStatus={sideBarStatus}
        sideBarDrawerOpen={sideBarDrawerOpen}
        setSideBarDrawerOpen={setSideBarDrawerOpen}
        sideBarYPos={sideBarAndMainContentsYPos}
        overlayZPos="z-20"
        sideBarDrawerZPos="z-30"
      />
      <main
        className={`
          fixed ${sideBarAndMainContentsYPos} 
          right-0 bottom-0
          overflow-y-auto
          transition-[left] duration-200 ease-out
          ${mainContentsXPosCss[sideBarStatus]}
        `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default ClientPageLayout;
