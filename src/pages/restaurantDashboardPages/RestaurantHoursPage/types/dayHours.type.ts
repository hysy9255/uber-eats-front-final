import type { DayOfWeek } from "./dayOfWeek.type";

export interface DayHours {
  day: DayOfWeek;
  open: string;
  close: string;
  enabled: boolean;
}
