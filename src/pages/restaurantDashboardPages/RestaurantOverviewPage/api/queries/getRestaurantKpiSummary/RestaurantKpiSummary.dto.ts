export type RestaurantKpiSummaryDTO = {
  orders: {
    value: number;
    changePercent: number;
  };
  revenue: {
    value: number;
    changePercent: number;
  };
  averageOrderValue: {
    value: number;
    changePercent: number;
  };
  newCustomers: {
    value: number;
    changePercent: number;
  };
};
