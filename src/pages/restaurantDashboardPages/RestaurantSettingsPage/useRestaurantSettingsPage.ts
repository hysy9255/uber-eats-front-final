import { useState } from "react";
import type { SettingsTab } from "./types/settingsTab.type";

export const useRestaurantSettingsPage = () => {
  const [currentTab, setCurrentTab] = useState<SettingsTab>("restaurant");

  return {
    currentTab,
    setCurrentTab,
  };
};
