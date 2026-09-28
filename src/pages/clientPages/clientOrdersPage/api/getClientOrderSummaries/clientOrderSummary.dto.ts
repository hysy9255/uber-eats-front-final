import type { OrderStatus } from "../../../ownerOrderPage/types/orderStatus.enum";
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
