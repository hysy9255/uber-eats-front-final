import { SideBarTab } from "./SideBarTab";
import { tabOptions } from "./constants/sidebarTabOptions";
import SettingTab from "./SettingTab";
import Footer from "./Footer";
import { Fragment } from "react/jsx-runtime";
import { useAuth } from "@/shared/context/auth/useAuth";
import { getToken } from "@/shared/utils/getToken";
import { useCallback, useEffect, useState } from "react";
import { SideBarStatus } from "../../../shared/types/sideBarStatus.type";
import { getMyProfile } from "../../../shared/api/getMyProfile/getMyProfile";
import type { UserProfileDTO } from "../../../shared/api/getMyProfile/userProfile.dto";
import { useCart } from "../../../pages/clientPages/shared/context/cart/useCart";

interface SideBarProps {
  css: string;
  sideBarStatus: SideBarStatus;
}

export const SideBar: React.FC<SideBarProps> = ({ css, sideBarStatus }) => {
  const { cart } = useCart();
  const { loggedIn, logout } = useAuth();
  const token = getToken();
  const [userProfile, setUserProfile] = useState<UserProfileDTO>();

  const loadProfileData = useCallback(async () => {
    try {
      if (!token) return;
      const profileData = await getMyProfile(token);
      setUserProfile(profileData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading profile data");
    }
  }, [token]);

  useEffect(() => {
    loadProfileData();
  }, [loadProfileData]);

  return (
    <div className={`${css}`}>
      {tabOptions.map((menu) => (
        <SideBarTab
          key={menu.path}
          tab={menu}
          status={sideBarStatus}
          optionalLabel={
            menu.label === "Cart" && cart && cart.items.length > 0
              ? String(cart?.items.length)
              : undefined
          }
        />
      ))}

      {sideBarStatus === SideBarStatus.FullBar && (
        <Fragment>
          <div className="mt-4 border-t border-gray-200 pt-5">
            <div className="px-3 text-[10px] font-medium tracking-[0.08em] text-gray-500">
              CUSTOMER
            </div>

            <SettingTab />
          </div>
          {loggedIn && (
            <Footer
              onLogout={logout}
              userProfileImage={userProfile?.profileImgUrl}
              userName={userProfile?.name}
              userRole={userProfile?.role}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};
