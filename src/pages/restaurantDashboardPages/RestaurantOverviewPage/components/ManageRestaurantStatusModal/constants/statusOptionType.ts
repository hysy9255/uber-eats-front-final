import type { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

export type StatusOptionType = {
  value: RestaurantStatus;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  iconClass: string;
  selectedClass: string;
  badgeClass: string;
};
