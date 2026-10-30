import { useState } from "react";
import type { OrderFilters } from "./components/OrderToolBar/OrderFiltersDropdown/constants/orderFilters.type";
import { OrderTimeFilterEnum } from "./components/OrderToolBar/OrderFiltersDropdown/constants/orderTimeFilter.type";
import type { OrderTab } from "./components/OrderTabs/orderTab.type";

export const DEFAULT_ORDER_FILTERS: OrderFilters = {
  time: OrderTimeFilterEnum.ANY,
  minTotal: "",
  maxTotal: "",
};

export const useRestaurantOrdersFilter = () => {
  const [currentTab, setCurrentTab] = useState<OrderTab>("all");

  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState<OrderFilters>(DEFAULT_ORDER_FILTERS);

  const [appliedFilters, setAppliedFilters] = useState<OrderFilters>(
    DEFAULT_ORDER_FILTERS
  );

  const [filtersOpen, setFiltersOpen] = useState(false);

  const openFilterModal = () => {
    setFiltersOpen(true);
  };

  const closeFilterModal = () => {
    setFiltersOpen(false);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setFiltersOpen(false);
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_ORDER_FILTERS);
    setAppliedFilters(DEFAULT_ORDER_FILTERS);
  };

  return {
    currentTab,
    setCurrentTab,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    appliedFilters,
    handleApplyFilters,
    handleResetFilters,
    filtersOpen,
    openFilterModal,
    closeFilterModal,
  };
};
