import { tabOptions } from "./constants/sidebarTabOptions";
import Logo from "./Components/Logo";
import Tab from "./Components/Tab";
import SettingTab from "./Components/SettingTab";
import Footer from "./Components/Footer";
import { getToken } from "@/shared/utils/getToken";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/shared/context/auth/useAuth";
import { getMyProfile } from "../../../shared/api/getMyProfile/getMyProfile";
import type { UserProfileDTO } from "../../../shared/api/getMyProfile/userProfile.dto";

const OwnerNavigationSideBar = () => {
  const { logout } = useAuth();
  const token = getToken();
  const [userProfile, setUserProfile] = useState<UserProfileDTO>();

  const loadProfileData = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
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
    <aside className="w-[245px] h-screen bg-white border-r border-gray-200 flex flex-col px-4 py-5">
      {/* Logo */}
      <Logo />

      {/* Main */}
      <div className="mt-8">
        <div className="px-3 text-[10px] font-medium tracking-[0.08em] text-gray-500">
          MANAGE
        </div>

        <nav className="mt-3 flex flex-col gap-y-1">
          {tabOptions.map((menu) => {
            return <Tab key={menu.path} tab={menu} />;
          })}
        </nav>
      </div>

      {/* Restaurant */}
      <div className="mt-4 border-t border-gray-200 pt-5">
        <div className="px-3 text-[10px] font-medium tracking-[0.08em] text-gray-500">
          RESTAURANT
        </div>

        <SettingTab />
      </div>

      <Footer
        onLogout={logout}
        userProfileImage={userProfile?.profileImgUrl}
        userName={userProfile?.name}
        userRole={userProfile?.role}
      />
    </aside>
  );
};

export default OwnerNavigationSideBar;
