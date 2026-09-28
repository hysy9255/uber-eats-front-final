import type { OrderStatus } from "../../types/orderStatus.enum";

type OrderItemDTO = {
  dishName: string;
  quantity: number;
  unitPrice: number;
};

export type RestaurantOrderDetailDTO = {
  orderId: string;
  status: OrderStatus;
  client: string;
  orderedAt: Date;
  orderItems: OrderItemDTO[];
  deliveryTo: string;
  requestToRestaurant: string | null;
  totalPrice: number;
};
