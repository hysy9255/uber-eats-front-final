import type { UpdatableDayHoursField } from "./updatableDayHoursField.type";

export type UpdateSelectedDay = <K extends keyof UpdatableDayHoursField>(
  field: K,
  value: UpdatableDayHoursField[K]
) => void;
