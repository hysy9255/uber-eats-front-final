import {
  drawerLogoLeftPadding,
  headerHeight,
  sideBarSizeCss,
} from "../../../shared/constants/layoutCss";
import { SideBarStatus } from "../../../shared/types/sideBarStatus.type";

import HamburgerIcon from "../Shared/HamburgerIcon";
import Logo from "../Shared/Logo";
import { SideBar } from "./SideBar";

interface SideBarDrawerProps {
  css: string;
  onClickHamburger: () => void;
}

export const SideBarDrawer: React.FC<SideBarDrawerProps> = ({
  css,
  onClickHamburger,
}) => {
  return (
    <section className={`${css}`}>
      <div
        className={`flex shrink-0 items-center ${drawerLogoLeftPadding} ${headerHeight}`}
      >
        <button
          type="button"
          onClick={onClickHamburger}
          className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 hover:cursor-pointer flex items-center justify-center"
        >
          <HamburgerIcon css="h-6 w-6" />
        </button>
        <Logo />
      </div>
      <SideBar
        sideBarStatus={SideBarStatus.FullBar}
        css={`
          ${sideBarSizeCss[SideBarStatus.FullBar]}
        `}
      />
    </section>
  );
};
