import type { SettingsTab } from "../types/settingsTab.type";

export const tabs: {
  key: SettingsTab;
  label: string;
}[] = [
  {
    key: "restaurant",
    label: "Restaurant info",
  },
  {
    key: "payment",
    label: "Payment",
  },
  {
    key: "notifications",
    label: "Notifications",
  },
  {
    key: "account",
    label: "Account",
  },
];
