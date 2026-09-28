import { Home, ShoppingBag, ShoppingCart } from "lucide-react";
import type { TabOptionType } from "./tabOption.type";

export const tabOptions: TabOptionType[] = [
  {
    label: "Home",
    path: "/restaurants",
    icon: Home,
  },
  {
    label: "Orders",
    path: "/orders",
    icon: ShoppingBag,
  },
  {
    label: "Cart",
    path: "/cart",
    icon: ShoppingCart,
  },
];
