import type { OrderTimeFilter } from "./orderTimeFilter.type";

export interface OrderFilters {
  time: OrderTimeFilter;
  minTotal: string;
  maxTotal: string;
}
