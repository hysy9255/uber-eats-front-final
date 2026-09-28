import { DayOfWeekType } from "../api/getRestaurantHours/restaurantHours.dto";

export const DAY_OF_WEEK_ORDER: Record<DayOfWeekType, number> = {
  [DayOfWeekType.Mon]: 0,
  [DayOfWeekType.Tue]: 1,
  [DayOfWeekType.Wed]: 2,
  [DayOfWeekType.Thu]: 3,
  [DayOfWeekType.Fri]: 4,
  [DayOfWeekType.Sat]: 5,
  [DayOfWeekType.Sun]: 6,
};
