import type { RestaurantHoursDTO } from "../api/getRestaurantHours/restaurantHours.dto";
import type { UpdateRestaurantHoursDTO } from "../api/updateRestaurantHours/updateRestaurantHours.dto";
import { DAY_OF_WEEK_CODE } from "../constants/dayOfWeekCode.constants";
import { DAY_OF_WEEK_LABEL } from "../constants/dayOfWeekLabel.constants";
import { DAY_OF_WEEK_ORDER } from "../constants/dayOfWeekOrder.contstants";
import type { DayHours } from "../types/dayHours.type";

export const formatRestaurantHours = (
  operatingHoursData: RestaurantHoursDTO[]
): DayHours[] => {
  return operatingHoursData
    .sort(
      (a, b) => DAY_OF_WEEK_ORDER[a.dayOfWeek] - DAY_OF_WEEK_ORDER[b.dayOfWeek]
    )
    .map((item) => ({
      day: DAY_OF_WEEK_LABEL[item.dayOfWeek],
      open: item.openTime || "09:00",
      close: item.closeTime || "22:00",
      enabled: !item.isClosed,
    }));
};

export const formatDayHoursToRestaurantHoursDTO = (
  dayHours: DayHours[]
): UpdateRestaurantHoursDTO[] => {
  return dayHours.map((item) => {
    if (!item.enabled) {
      return {
        dayOfWeek: DAY_OF_WEEK_CODE[item.day],
        openTime: null,
        closeTime: null,
        isClosed: !item.enabled,
      };
    } else {
      return {
        dayOfWeek: DAY_OF_WEEK_CODE[item.day],
        openTime: item.open,
        closeTime: item.close,
        isClosed: !item.enabled,
      };
    }
  });
};
