import type { DishImageState } from "../../shared/types/dishImageState";

export type EditMenuForm = {
  dishId: string;
  dishName: string;
  category: string;
  price: string;
  description: string;
  dishImage: DishImageState;
};
