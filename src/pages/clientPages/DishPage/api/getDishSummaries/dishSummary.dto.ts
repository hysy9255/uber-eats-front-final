export type DishSummaryDTO = {
  dishId: string;
  category: string;
  name: string;
  price: number;
  description: string;
  dishImg: string | null;
  numOfReviews: number;
};
