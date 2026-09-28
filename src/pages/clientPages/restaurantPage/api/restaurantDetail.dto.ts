import type { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

export enum DayOfWeekType {
  Mon = "mon",
  Tue = "tue",
  Wed = "wed",
  Thu = "thu",
  Fri = "fri",
  Sat = "sat",
  Sun = "sun",
}

export type DayOperatingHoursDTO = {
  dayOfWeek: DayOfWeekType;
  isClosed: boolean;
  openTime: string | null;
  closeTime: string | null;
};

export type RestaurantDetailDTO = {
  restaurantId: string;
  name: string;
  address: string;
  status: RestaurantStatus;
  bannerImg: string;
  logo: string | null;
  avgRating: number | null;
  reviewCount: number;
  operatingHours: DayOperatingHoursDTO[];
};
