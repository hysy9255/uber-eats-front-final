export type RestaurantRevenueDTO = {
  totalRevenue: number;
  dailyRevenue: {
    date: string;
    revenue: number;
  }[];
};
