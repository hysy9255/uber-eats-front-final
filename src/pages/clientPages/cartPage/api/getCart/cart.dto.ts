export type CartItemDTO = {
  dishId: string;
  dishImg: string | null;
  name: string;
  description: string;
  unitPrice: number;
  quantity: number;
  lineTotalPrice: number;
};

export type RestaurantInfoDTO = {
  restaurantId: string;
  restaurantName: string;
  restaurantLogo: string | null;
};

export type CartDTO = {
  restaurantInfo: RestaurantInfoDTO | null;
  items: CartItemDTO[];
  totalCost: number;
};
