export type OrderRequestDTO = {
  toRestaurant: string | null;
  toDriver: string | null;
};

export type PlaceOrderDTO = {
  request: OrderRequestDTO;
};
