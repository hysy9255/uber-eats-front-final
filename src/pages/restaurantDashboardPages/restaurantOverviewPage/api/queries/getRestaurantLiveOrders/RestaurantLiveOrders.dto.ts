import type { OrderStatus } from "../../../../RestaurantOrdersPage/types/orderStatus.enum";

export type RestaurantOverviewLiveOrderItemDTO = {
  name: string;
  quantity: number;
};

export type RestaurantLiveOrderDTO = {
  orderId: string;

  orderItems: RestaurantOverviewLiveOrderItemDTO[];

  status: OrderStatus;

  orderedAt: string;
};

export type RestaurantLiveOrdersDTO = {
  count: number;
  orders: RestaurantLiveOrderDTO[];
};
