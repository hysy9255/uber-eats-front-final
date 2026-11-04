import { useEffect, useState } from "react";
import type { DishDetailDTO } from "../../../api/getDishDetail/dishDetail.dto";
import { getDishDetail } from "../../../api/getDishDetail/getDishDetail";

export const useDishDetail = (restaurantId?: string, dishId?: string) => {
  const [dishDetail, setDishDetail] = useState<DishDetailDTO>();

  useEffect(() => {
    if (!dishId || !restaurantId) {
      setDishDetail(undefined);
      return;
    }

    let cancelled = false;

    const loadDishDetail = async () => {
      try {
        const data = await getDishDetail(restaurantId, dishId);

        if (!cancelled) {
          setDishDetail(data);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load dish detail:", error);
        }
      }
    };

    void loadDishDetail();

    return () => {
      cancelled = true;
    };
  }, [restaurantId, dishId]);

  return { dishDetail };
};
