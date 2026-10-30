import type { OrderStatus } from "../../../../restaurantDashboardPages/restaurantOrdersPage/types/orderStatus.enum";
import type { OrderItemDTO } from "../shared/orderItem.dto";

export type ClientOrderSummaryDTO = {
  orderId: string;
  status: OrderStatus;
  deliverTo: string;
  numOfItems: number;
  totalPrice: number;
  orderedAt: string;
  deliveredAt: string | null;
  orderItems: OrderItemDTO[];
};

export type NewClientOrderSummaryDTO = {
  orderId: string;
  status: OrderStatus;
  totalPrice: number;
  orderedAt: string;
  deliveredAt: string | null;
  orderItems: OrderItemDTO[];
  restaurant: string;
  restaurantLogo: string | null;
  deliverTo: string;
};
