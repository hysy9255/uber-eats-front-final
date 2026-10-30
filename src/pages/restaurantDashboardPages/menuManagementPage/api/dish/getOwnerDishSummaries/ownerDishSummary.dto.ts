export type OwnerDishSummaryDTO = {
  dishId: string;
  category: string;
  categoryId: string;
  name: string;
  price: number;
  dishImg: string | null;
  numOfSold: number;
  isAvailable: boolean;
  description: string;
};
