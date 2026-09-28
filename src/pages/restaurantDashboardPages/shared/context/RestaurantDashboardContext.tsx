import { createContext } from "react";

type RestaurantDashboardContextValue = {
  restaurantId: string | null;
};

export const RestaurantDashboardContext =
  createContext<RestaurantDashboardContextValue | null>(null);
