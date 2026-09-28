import { SideBarStatus } from "@/shared/types/sideBarStatus.type";
import { getSideBarStatus } from "@/shared/utils/getSideBarStatus";
import { useEffect, useState } from "react";

export const useClientPageLayout = () => {
  const [sideBarStatus, setSideBarStatus] = useState<SideBarStatus>(() =>
    getSideBarStatus(window.innerWidth)
  );

  const [preferredDesktopSideBarStatus, setPreferredDesktopSideBarStatus] =
    useState<SideBarStatus>(SideBarStatus.FullBar);

  const [sideBarDrawerOpen, setSideBarDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 790) {
        setSideBarStatus(SideBarStatus.Collapsed);
        return;
      }

      if (width <= 1300) {
        setSideBarStatus(SideBarStatus.MiniBar);
        return;
      }

      setSideBarStatus(preferredDesktopSideBarStatus);
      setSideBarDrawerOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [preferredDesktopSideBarStatus]);

  const onClickHamburger = () => {
    if (window.innerWidth > 1300) {
      setPreferredDesktopSideBarStatus((prev) => {
        const next =
          prev === SideBarStatus.FullBar
            ? SideBarStatus.MiniBar
            : SideBarStatus.FullBar;

        setSideBarStatus(next);

        return next;
      });

      return;
    }

    setSideBarDrawerOpen((prev) => !prev);
  };

  return {
    onClickHamburger,
    sideBarDrawerOpen,
    sideBarStatus,
    setSideBarDrawerOpen,
  };
};
