import type { DayOfWeekType } from "../getRestaurantHours/restaurantHours.dto";

export type UpdateRestaurantHoursDTO = {
  dayOfWeek: DayOfWeekType;
  isClosed: boolean;
  openTime: string | null;
  closeTime: string | null;
};
