import { CheckCircle2, CirclePause, Store } from "lucide-react";
import type { StatusOptionType } from "./statusOptionType";

export const STATUS_OPTIONS: StatusOptionType[] = [
  {
    value: "open" as const,
    title: "Open",
    description: "Your restaurant is open and accepting new orders.",
    badge: "Taking orders",
    icon: <CheckCircle2 className="w-5 h-5" />,
    iconClass: "bg-green-50 text-green-600",
    selectedClass: "border-green-300 bg-green-50/50",
    badgeClass: "bg-green-100 text-green-700",
  },
  {
    value: "paused" as const,
    title: "Pause orders",
    description:
      "Temporarily stop receiving new orders. Current orders can still be managed.",
    badge: "Not taking new orders",
    icon: <CirclePause className="w-5 h-5" />,
    iconClass: "bg-amber-50 text-amber-600",
    selectedClass: "border-amber-300 bg-amber-50/50",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    value: "closed" as const,
    title: "Closed",
    description: "Your restaurant is closed and will not accept new orders.",
    badge: "Not taking orders",
    icon: <Store className="w-5 h-5" />,
    iconClass: "bg-red-50 text-red-500",
    selectedClass: "border-red-300 bg-red-50/50",
    badgeClass: "bg-red-100 text-red-600",
  },
];
