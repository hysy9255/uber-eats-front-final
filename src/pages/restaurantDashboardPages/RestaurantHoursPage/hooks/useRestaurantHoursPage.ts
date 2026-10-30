import { useCallback, useEffect, useState } from "react";
import type { DayOfWeek } from "../types/dayOfWeek.type";
import type { DayHours } from "../types/dayHours.type";
import {
  formatDayHoursToRestaurantHoursDTO,
  formatRestaurantHours,
} from "../utils/formatRestaurantHours";
import type { UpdateSelectedDay } from "../types/updateSelectedDay.type";
import { useRestaurantHoursData } from "./useRestaurantHoursData";

export const useRestaurantHoursPage = () => {
  const { loadOperatingHours, updateOperatingHours } = useRestaurantHoursData();

  const [hours, setHours] = useState<DayHours[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Monday");
  const [isDirty, setIsDirty] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const selectedHours = hours.find((item) => item.day === selectedDay);

  const loadHours = useCallback(async () => {
    const data = await loadOperatingHours();

    setHours(formatRestaurantHours(data));
  }, [loadOperatingHours]);

  useEffect(() => {
    loadHours();
  }, [loadHours]);

  const saveHours = async () => {
    const payload = formatDayHoursToRestaurantHoursDTO(hours);

    await updateOperatingHours(payload);
    await loadHours();

    setIsDirty(false);
    setShowSuccessToast(true);
  };

  const discardChanges = async () => {
    await loadHours();
    setIsDirty(false);
  };

  const toggleOperatingDay = (day: DayOfWeek) => {
    setHours((prev) =>
      prev.map((item) =>
        item.day === day ? { ...item, enabled: !item.enabled } : item
      )
    );

    setIsDirty(true);
  };

  const updateSelectedDay: UpdateSelectedDay = (field, value) => {
    setHours((prev) =>
      prev.map((item) =>
        item.day === selectedDay ? { ...item, [field]: value } : item
      )
    );

    setIsDirty(true);
  };

  const applyMondayHoursToAllDays = () => {
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

    setIsDirty(true);
  };

  const closeSuccessToast = () => {
    setShowSuccessToast(false);
  };

  return {
    hours,
    selectedDay,
    selectedHours,
    isDirty,
    showSuccessToast,

    setSelectedDay,

    updateSelectedDay,
    toggleOperatingDay,
    applyMondayHoursToAllDays,

    saveHours,
    discardChanges,
    closeSuccessToast,
  };
};
