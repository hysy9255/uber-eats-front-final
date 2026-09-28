import { Fragment } from "react";
import { SideBarDrawer } from "./SidebarDrawer";
import { SideBarDrawerOverlay } from "./SideBarDrawerOverlay";
import { SideBar } from "./SideBar";
import type { SideBarStatus } from "../../../shared/types/sideBarStatus.type";
import { sideBarSizeCss } from "../../../shared/constants/layoutCss";

interface NavigationSideBarProps {
  sideBarStatus: SideBarStatus;
  sideBarDrawerOpen: boolean;
  setSideBarDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarYPos: string;
  overlayZPos: string;
  sideBarDrawerZPos: string;
}

export const NavigationSideBar: React.FC<NavigationSideBarProps> = ({
  sideBarStatus,
  sideBarDrawerOpen,
  setSideBarDrawerOpen,
  sideBarYPos,
  overlayZPos,
  sideBarDrawerZPos,
}) => {
  return (
    <Fragment>
      <SideBar
        sideBarStatus={sideBarStatus}
        css={`
        fixed
        ${sideBarYPos} left-0 bottom-0
        ${sideBarSizeCss[sideBarStatus]}
        overflow-y-auto
        bg-white
        flex flex-col
        `}
      />
      <SideBarDrawerOverlay
        isOpen={sideBarDrawerOpen}
        onClick={() => setSideBarDrawerOpen(false)}
        css={overlayZPos}
      />
      <SideBarDrawer
        onClickHamburger={() => setSideBarDrawerOpen(false)}
        css={`
              fixed ${sideBarDrawerZPos}
              top-0 left-0 bottom-0
              overflow-y-auto
              bg-white
              transition-transform duration-300 ease-out
              ${sideBarDrawerOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      />
    </Fragment>
  );
};
