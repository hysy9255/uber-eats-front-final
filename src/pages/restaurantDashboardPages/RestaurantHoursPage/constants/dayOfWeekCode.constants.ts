import { DayOfWeekType } from "../api/getRestaurantHours/restaurantHours.dto";
import type { DayOfWeek } from "../types/dayOfWeek.type";

export const DAY_OF_WEEK_CODE: Record<DayOfWeek, DayOfWeekType> = {
  Monday: DayOfWeekType.Mon,
  Tuesday: DayOfWeekType.Tue,
  Wednesday: DayOfWeekType.Wed,
  Thursday: DayOfWeekType.Thu,
  Friday: DayOfWeekType.Fri,
  Saturday: DayOfWeekType.Sat,
  Sunday: DayOfWeekType.Sun,
};
