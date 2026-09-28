import { useCallback, useEffect, useState } from "react";
import type { DayOfWeek } from "../types/dayOfWeek.type";
import type { DayHours } from "../types/dayHours.type";
import {
  formatDayHoursToRestaurantHoursDTO,
  formatRestaurantHours,
} from "../utils/formatRestaurantHours";
import type { UpdateSelectedDay } from "../types/updateSelectedDay.type";
import { getToken } from "../../../../shared/utils/getToken";
import { getRestaurantHours } from "../api/getRestaurantHours/getRestaurantHours";
import { updateRestaurantHours } from "../api/updateRestaurantHours/updateRestaurantHours";
import { useRestaurantDashboard } from "../../shared/context/useRestaurantDashboard";

export const useRestaurantHoursPage = () => {
  const token = getToken();
  const [hours, setHours] = useState<DayHours[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Monday");

  const [hasBreakTime, setHasBreakTime] = useState(false);
  const [is24Hours, setIs24Hours] = useState(false);

  const selectedHours = hours.find((item) => item.day === selectedDay);
  const { restaurantId } = useRestaurantDashboard();

  const loadOperatingHours = useCallback(async () => {
    try {
      if (!restaurantId) throw new Error("No restaurant ID found");
      const operatingHoursData = await getRestaurantHours(restaurantId); // Replace with actual restaurant ID
      const formattedHours = formatRestaurantHours(operatingHoursData);
      setHours(formattedHours);
    } catch (e) {
      console.error(e);
      throw new Error("Error Loading Operating Hours");
    }
  }, [restaurantId]);

  const handleUpdateRestaurantHours = async () => {
    try {
      if (!token) throw new Error("No token found");
      if (!restaurantId) throw new Error("No restaurant ID found");
      const payload = formatDayHoursToRestaurantHoursDTO(hours);
      await updateRestaurantHours(token, restaurantId, payload);
      loadOperatingHours();
    } catch (e) {
      console.error(e);
      throw new Error("Error Updating Operating Hours");
    }
  };

  useEffect(() => {
    loadOperatingHours();
  }, [loadOperatingHours]);

  const updateSelectedDay: UpdateSelectedDay = (field, value) => {
    setHours((prev) =>
      prev.map((item) =>
        item.day === selectedDay
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  const copyMondayHours = () => {
    const monday = hours.find((item) => item.day === "Monday");

    if (!monday) return;

    setHours((prev) =>
      prev.map((item) => ({
        ...item,
        open: monday.open,
        close: monday.close,
        enabled: monday.enabled,
      }))
    );
  };

  return {
    hours,
    setHours,
    selectedDay,
    setSelectedDay,
    hasBreakTime,
    setHasBreakTime,
    is24Hours,
    setIs24Hours,
    selectedHours,
    updateSelectedDay,
    copyMondayHours,
    handleUpdateRestaurantHours,
    loadOperatingHours,
  };
};
