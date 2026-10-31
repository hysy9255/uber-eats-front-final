import type { RestaurantOrderSummaryDTO } from "../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import type { OrderTab } from "../components/OrderTabs/orderTab.type";
import type { OrderFilters } from "../components/OrderToolBar/OrderFiltersDropdown/constants/orderFilters.type";
import { OrderTimeFilterEnum } from "../components/OrderToolBar/OrderFiltersDropdown/constants/orderTimeFilter.type";

export const filterOrderByTab = (
  order: RestaurantOrderSummaryDTO,
  currentTab: OrderTab
) => {
  return currentTab === "all" || order.status.toLowerCase() === currentTab;
};

export const filterSearch = (
  order: RestaurantOrderSummaryDTO,
  searchTerm: string
): boolean => {
  const keyword = searchTerm.trim().toLowerCase();

  if (keyword === "") {
    return true;
  }

  const matchesOrderId = order.orderId.toLowerCase().includes(keyword);

  const matchesClient = order.client.toLowerCase().includes(keyword);

  const matchesItems = order.orderItems.some((item) =>
    item.name.toLowerCase().includes(keyword)
  );

  return matchesOrderId || matchesClient || matchesItems;
};

export const filterByTime = (
  order: RestaurantOrderSummaryDTO,
  appliedFilters: OrderFilters
) => {
  const now = Date.now();
  const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000);
  const oneHourAgo = new Date(now - 60 * 60 * 1000);
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const orderedAt = new Date(order.orderedAt);

  if (
    appliedFilters.time === OrderTimeFilterEnum.THIRTY_MINUTES &&
    orderedAt < thirtyMinutesAgo
  ) {
    return false;
  }

  if (
    appliedFilters.time === OrderTimeFilterEnum.ONE_HOUR &&
    orderedAt < oneHourAgo
  ) {
    return false;
  }

  if (appliedFilters.time === OrderTimeFilterEnum.TODAY && orderedAt < today) {
    return false;
  }

  return true;
};

export const filterByTotalPrice = (
  order: RestaurantOrderSummaryDTO,
  appliedFilters: OrderFilters
) => {
  // 4. Minimum total
  if (
    appliedFilters.minTotal !== "" &&
    order.totalPrice < Number(appliedFilters.minTotal)
  ) {
    return false;
  }

  // 5. Maximum total
  if (
    appliedFilters.maxTotal !== "" &&
    order.totalPrice > Number(appliedFilters.maxTotal)
  ) {
    return false;
  }

  return true;
};
