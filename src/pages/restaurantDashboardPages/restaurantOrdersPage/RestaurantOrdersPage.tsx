import OwnerOrdersPageHeader from "./components/OwnerOrdersPageHeader";
import OrderTabs from "./components/OrderTabs/OrderTabs";
import OrderToolBar from "./components/OrderToolBar/OrderToolBar";
import OrderTable from "./components/OrderTable/OrderTable";
import { useOwnerOrdersPage } from "./useRestaurantOrdersPage";

const RestaurantOrdersPage = () => {
  const {
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
  } = useOwnerOrdersPage();

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-5">
      <OwnerOrdersPageHeader />

      <OrderTabs
        orders={orders}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <OrderToolBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />

      <OrderTable
        filteredOrders={filteredOrders}
        updateOrderStatusLocally={updateOrderStatusLocally}
      />
    </div>
  );
};

export default RestaurantOrdersPage;
