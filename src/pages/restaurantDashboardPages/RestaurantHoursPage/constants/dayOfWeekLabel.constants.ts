import { DayOfWeekType } from "../api/getRestaurantHours/restaurantHours.dto";
import type { DayOfWeek } from "../types/dayOfWeek.type";

export const DAY_OF_WEEK_LABEL: Record<DayOfWeekType, DayOfWeek> = {
  [DayOfWeekType.Mon]: "Monday",
  [DayOfWeekType.Tue]: "Tuesday",
  [DayOfWeekType.Wed]: "Wednesday",
  [DayOfWeekType.Thu]: "Thursday",
  [DayOfWeekType.Fri]: "Friday",
  [DayOfWeekType.Sat]: "Saturday",
  [DayOfWeekType.Sun]: "Sunday",
};
