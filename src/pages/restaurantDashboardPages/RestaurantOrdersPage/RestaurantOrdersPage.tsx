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
    openFilterModal,
    closeFilterModal,
    updateOrderStatusLocally,
  } = useOwnerOrdersPage();

  return (
    <div className="h-dvh bg-[#fafafa] px-6 py-5 flex flex-col">
      <OwnerOrdersPageHeader />

      <OrderTabs
        className="mt-5"
        orders={orders}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <OrderToolBar
        className="mt-5 "
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filters={filters}
        setFilters={setFilters}
        filtersOpen={filtersOpen}
        openFilterModal={openFilterModal}
        closeFilterModal={closeFilterModal}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />

      <OrderTable
        className="mt-5 flex-1 overflow-y-auto"
        filteredOrders={filteredOrders}
        updateOrderStatusLocally={updateOrderStatusLocally}
      />
    </div>
  );
};

export default RestaurantOrdersPage;
