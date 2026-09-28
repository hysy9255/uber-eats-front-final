export enum DayOfWeekType {
  Mon = "mon",
  Tue = "tue",
  Wed = "wed",
  Thu = "thu",
  Fri = "fri",
  Sat = "sat",
  Sun = "sun",
}

export type RestaurantHoursDTO = {
  dayOfWeek: DayOfWeekType;
  isClosed: boolean;
  openTime: string | null;
  closeTime: string | null;
};
