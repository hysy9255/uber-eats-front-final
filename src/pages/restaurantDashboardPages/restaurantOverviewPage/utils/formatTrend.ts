export const formatTrend = (value: number) => {
  if (value > 0) return `+${value}%`;
  if (value < 0) return `${value}%`;

  return "0%";
};
