import { useContext } from "react";
import { RestaurantDashboardContext } from "./RestaurantDashboardContext";

export const useRestaurantDashboard = () => {
  const ctx = useContext(RestaurantDashboardContext);
  if (!ctx)
    throw new Error(
      "useOwnerDashboard must be used within ownerDashboardProvider"
    );
  return ctx;
};
