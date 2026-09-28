import { Clock3, House, NotebookTabs, ShoppingBag, Tag } from "lucide-react";
import type { TabOptionType } from "./tabOption.type";

export const tabOptions: TabOptionType[] = [
  {
    label: "Overview",
    path: "/dashboard/overview",
    icon: House,
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: ShoppingBag,
    badge: 3,
  },
  {
    label: "Menu",
    path: "/dashboard/menu",
    icon: NotebookTabs,
  },
  {
    label: "Hours",
    path: "/dashboard/hours",
    icon: Clock3,
  },
  {
    label: "Promotions",
    path: "/dashboard/promotions",
    icon: Tag,
  },
];
