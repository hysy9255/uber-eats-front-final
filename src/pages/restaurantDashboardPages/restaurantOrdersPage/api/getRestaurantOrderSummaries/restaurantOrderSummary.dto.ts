import type { OrderStatus } from "../../types/orderStatus.enum";

export type OrderItemSummary = {
  name: string;
  quantity: number;
};

export type RestaurantOrderSummaryDTO = {
  orderId: string;
  status: OrderStatus;
  orderedAt: string;
  totalPrice: number;
  client: string;
  orderItems: OrderItemSummary[];
};
