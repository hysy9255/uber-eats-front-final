import { useClientOrdersPage } from "./useClientOrdersPage";
import OrdersPageHeader from "./components/OrdersPageHeader";
import OrderHistoryTab from "./components/OrderHistoryTab/OrderHistoryTab";
import { ClientOrderView } from "./types/clientOrderView.enum";
import ClientOrderSummaryCard from "./components/ClientOrderSummaryCard/ClientOrderSummaryCard";
import Toast from "../shared/components/Toast";

export const ClientOrdersPage = () => {
  const {
    showOrderPlacedToast,
    handleClickCloseToast,
    currentTab,
    onGoingCount,
    completedCount,
    currentOrders,
    handleClickTab,
  } = useClientOrdersPage();

  return (
    <section className="px-4 py-6 mx-auto w-full max-w-[900px]">
      <OrdersPageHeader />
      <div className="w-full flex justify-center py-3">
        <OrderHistoryTab
          currentTab={currentTab}
          handleClickTab={handleClickTab}
          ongoingCount={onGoingCount}
          completedCount={completedCount}
        />
      </div>

      {currentOrders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white/60 py-14 text-center px-10">
          <div className="text-gray-900 font-semibold">
            {currentTab === ClientOrderView.ONGOING
              ? "No ongoing orders"
              : "No completed orders"}
          </div>

          <div className="text-sm text-gray-500 mt-2">
            {currentTab === ClientOrderView.ONGOING
              ? "Your active orders will appear here."
              : "Your completed orders will appear here."}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {currentOrders.map((order) => (
            <ClientOrderSummaryCard key={order.orderId} order={order} />
          ))}
        </div>
      )}

      {showOrderPlacedToast && (
        <Toast
          message="Order has been placed"
          onClose={handleClickCloseToast}
        />
      )}
    </section>
  );
};
