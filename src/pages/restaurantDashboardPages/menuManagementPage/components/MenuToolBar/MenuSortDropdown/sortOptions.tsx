import { ArrowDown, ArrowUp } from "lucide-react";
import type { MenuSortType } from "./menuSortType";

export const sortOptions: {
  value: MenuSortType;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "price-asc",
    label: "Price: Low to High",
    icon: <ArrowUp className="w-4 h-4" />,
  },
  {
    value: "price-desc",
    label: "Price: High to Low",
    icon: <ArrowDown className="w-4 h-4" />,
  },
  {
    value: "sold-desc",
    label: "Sold: High to Low",
    icon: <ArrowDown className="w-4 h-4" />,
  },
  {
    value: "sold-asc",
    label: "Sold: Low to High",
    icon: <ArrowUp className="w-4 h-4" />,
  },
];
