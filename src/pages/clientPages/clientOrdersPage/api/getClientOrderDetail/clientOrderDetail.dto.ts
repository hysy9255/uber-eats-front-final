import type { OrderStatus } from "../../../../restaurantDashboardPages/RestaurantOrdersPage/types/orderStatus.enum";
import type { OrderItemDTO } from "../shared/orderItem.dto";

export type ClientOrderDetailDTO = {
  orderId: string;
  restaurant: string;
  restaurantLogo: string | null;
  cuisineType: string;
  status: OrderStatus;
  requestToRestaurant: string | null;
  requestToDriver: string | null;
  deliveryTo: string;
  orderItems: OrderItemDTO[];
  totalPrice: number;
};
