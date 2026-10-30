import type { DishImageState } from "../../shared/types/dishImageState";

export type AddMenuItemForm = {
  dishName: string;
  category: string;
  price: string;
  description: string;
  dishImage: DishImageState;
};
