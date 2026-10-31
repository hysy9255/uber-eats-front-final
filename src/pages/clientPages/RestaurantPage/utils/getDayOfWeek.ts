export const getDayOfWeek = (date: Date): string => {
  const days: string[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const dayIndex: number = date.getDay();
  return days[dayIndex];
};
