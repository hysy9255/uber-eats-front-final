export type OwnerDishSummaryDTO = {
  dishId: string;
  category: string;
  name: string;
  price: number;
  dishImg: string | null;
  numOfSold: number;
  isAvailable: boolean;
  description: string;
};
