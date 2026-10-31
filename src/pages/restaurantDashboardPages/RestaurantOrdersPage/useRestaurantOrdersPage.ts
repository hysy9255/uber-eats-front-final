import { useMemo } from "react";
import type { OrderFilters } from "./components/OrderToolBar/OrderFiltersDropdown/constants/orderFilters.type";
import { OrderTimeFilterEnum } from "./components/OrderToolBar/OrderFiltersDropdown/constants/orderTimeFilter.type";
import { useRestaurantOrdersData } from "./useRestaurantOrdersData";
import { useRestaurantOrdersFilter } from "./useRestaurantOrdersFilter";
import {
  filterByTime,
  filterByTotalPrice,
  filterOrderByTab,
  filterSearch,
} from "./utils/filterOrders";

export const DEFAULT_ORDER_FILTERS: OrderFilters = {
  time: OrderTimeFilterEnum.ANY,
  minTotal: "",
  maxTotal: "",
};

export const useOwnerOrdersPage = () => {
  const { orders, updateOrderStatusLocally } = useRestaurantOrdersData();

  const {
    currentTab,
    setCurrentTab,
    searchTerm,
    setSearchTerm,
    filters,
    appliedFilters,
    filtersOpen,
    openFilterModal,
    closeFilterModal,
    handleApplyFilters,
    handleResetFilters,
    setFilters,
  } = useRestaurantOrdersFilter();

  const filteredOrders = useMemo(
    () =>
      orders.filter(
        (order) =>
          filterOrderByTab(order, currentTab) &&
          filterSearch(order, searchTerm) &&
          filterByTime(order, appliedFilters) &&
          filterByTotalPrice(order, appliedFilters)
      ),
    [orders, currentTab, searchTerm, appliedFilters]
  );

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
    openFilterModal,
    closeFilterModal,
    updateOrderStatusLocally,
  };
};
