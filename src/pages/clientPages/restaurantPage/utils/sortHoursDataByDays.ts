import type { DayOfWeekType } from "../../../../../../api/restaurant/dto/restaurant-detail.dto";
import type { RestaurantHoursDTO } from "../../../../../../api/restaurant/dto/restaurant-hours.dto";

const dayOrder: Record<DayOfWeekType, number> = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6,
};

export const sortHoursDataByDays = (operatingHours: RestaurantHoursDTO[]) => {
  return [...operatingHours].sort(
    (a, b) => dayOrder[a.dayOfWeek] - dayOrder[b.dayOfWeek]
  );
};
