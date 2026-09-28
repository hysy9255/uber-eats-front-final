import { getToken } from "@/shared/utils/getToken";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { OrderFilters } from "./components/OrderToolBar/OrderFiltersDropdown/constants/orderFilters.type";
import { OrderTimeFilterEnum } from "./components/OrderToolBar/OrderFiltersDropdown/constants/orderTimeFilter.type";
import type { OrderTab } from "./components/OrderTabs/orderTab.type";
import type { OrderStatus } from "./types/orderStatus.enum";
import { getRestaurantOrderSummaries } from "./api/getRestaurantOrderSummaries/getRestaurantOrderSummaries";
import type { RestaurantOrderSummaryDTO } from "./api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";

export const DEFAULT_ORDER_FILTERS: OrderFilters = {
  time: OrderTimeFilterEnum.ANY,
  minTotal: "",
  maxTotal: "",
};

export const useOwnerOrdersPage = () => {
  const token = getToken();

  const [currentTab, setCurrentTab] = useState<OrderTab>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState<RestaurantOrderSummaryDTO[]>([]);

  // Dropdown에서 사용자가 현재 수정하고 있는 값
  const [filters, setFilters] = useState<OrderFilters>(DEFAULT_ORDER_FILTERS);

  // 실제 order 목록에 적용된 값
  const [appliedFilters, setAppliedFilters] = useState<OrderFilters>(
    DEFAULT_ORDER_FILTERS
  );

  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setFiltersOpen(false);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_ORDER_FILTERS);
    setAppliedFilters(DEFAULT_ORDER_FILTERS);
  };

  const filteredOrders = useMemo(() => {
    const now = Date.now();

    const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000);

    const oneHourAgo = new Date(now - 60 * 60 * 1000);

    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    const keyword = searchTerm.trim().toLowerCase();

    return orders.filter((order) => {
      // 1. Status tab
      const matchesTab =
        currentTab === "all" || order.status.toLowerCase() === currentTab;

      if (!matchesTab) {
        return false;
      }

      // 2. Search
      if (keyword !== "") {
        const matchesOrderId = order.orderId.toLowerCase().includes(keyword);

        const matchesClient = order.client.toLowerCase().includes(keyword);

        const matchesItems = order.orderItems.some((item) =>
          item.name.toLowerCase().includes(keyword)
        );

        if (!matchesOrderId && !matchesClient && !matchesItems) {
          return false;
        }
      }

      // 3. Order time
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

      if (
        appliedFilters.time === OrderTimeFilterEnum.TODAY &&
        orderedAt < today
      ) {
        return false;
      }

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
    });
  }, [orders, currentTab, searchTerm, appliedFilters]);

  const loadOrders = useCallback(async () => {
    if (!token) {
      throw new Error("No Token");
    }

    try {
      const ordersData = await getRestaurantOrderSummaries(token);

      setOrders(ordersData);
    } catch (e) {
      console.error(e);

      throw new Error("Error loading orders for restaurant");
    }
  }, [token]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const updateOrderStatusLocally = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId
          ? {
              ...order,
              status,
            }
          : order
      )
    );
  };

  return {
    currentTab,
    setCurrentTab,
    searchTerm,
    setSearchTerm,
    orders,
    filteredOrders,
    filters,
    setFilters,
    handleApplyFilters,
    handleResetFilters,
    filtersOpen,
    setFiltersOpen,
    updateOrderStatusLocally,
  };
};
