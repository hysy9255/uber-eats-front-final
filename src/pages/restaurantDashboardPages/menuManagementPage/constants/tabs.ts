export type MenuTab = "all" | "active" | "inactive";

export type TabType = {
  key: MenuTab;
  label: string;
};

export const tabs: TabType[] = [
  {
    key: "all",
    label: "All items",
  },
  {
    key: "active",
    label: "Active",
  },
  {
    key: "inactive",
    label: "Inactive",
  },
];
