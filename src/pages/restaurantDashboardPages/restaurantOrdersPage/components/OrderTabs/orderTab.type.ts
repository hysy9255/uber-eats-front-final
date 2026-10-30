import type { OrderStatus } from "../../types/orderStatus.enum";

export type OrderTab =
  | "all"
  | OrderStatus.Pending
  | OrderStatus.Cooking
  | OrderStatus.Ready
  | OrderStatus.Delivering
  | OrderStatus.Delivered;
