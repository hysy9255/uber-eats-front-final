import type { TrendType } from "../components/KpiSection/trendType";

export const getTrendType = (value: number): TrendType => {
  if (value > 0) return "positive";
  if (value < 0) return "negative";

  return "neutral";
};
