import { useCallback, useEffect, useState, type ReactNode } from "react";
import { RestaurantDashboardContext } from "./RestaurantDashboardContext";
import { getToken } from "../../../../shared/utils/getToken";
import { getMyRestaurant } from "./api/getMyRestaurant";

interface RestaurantDashboardProviderProps {
  children: ReactNode;
}

export const RestaurantDashboardProvider = ({
  children,
}: RestaurantDashboardProviderProps) => {
  const token = getToken();
  const [restaurantId, setRestaurantId] = useState<string | null>(null);

  const loadRestaurantId = useCallback(async () => {
    try {
      if (!token) throw new Error("No token found");
      const data = await getMyRestaurant(token);
      setRestaurantId(data.restaurantId);
    } catch (e) {
      console.error(e);
      throw new Error("Failed to load restaurant ID");
    }
  }, [token]);

  useEffect(() => {
    loadRestaurantId();
  }, [loadRestaurantId]);

  return (
    <RestaurantDashboardContext.Provider
      value={{
        restaurantId,
      }}
    >
      {children}
    </RestaurantDashboardContext.Provider>
  );
};
