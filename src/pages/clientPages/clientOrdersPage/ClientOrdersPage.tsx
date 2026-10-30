import { useClientOrdersPage } from "./useClientOrdersPage";
import OrdersPageHeader from "./components/OrdersPageHeader";
import { ClientOrderView } from "./types/clientOrderView.enum";
import Toast from "../shared/components/Toast";
import { ClientOrderSummaryCard } from "./components/ClientOrderSummaryCard/ClientOrderSummaryCard";
import TabButton from "../../../shared/components/TabButton";

export const ClientOrdersPage = () => {
  const {
    showOrderPlacedToast,
    closeToast,
    currentTab,
    onGoingCount,
    completedCount,
    currentOrders,
    handleClickTab,
  } = useClientOrdersPage();

  const tabs = [ClientOrderView.ONGOING, ClientOrderView.COMPLETED];

  return (
    <section className="p-5 mx-auto w-full">
      <OrdersPageHeader />

      <div className={`flex h-10 gap-8 border-b border-gray-200 mb-5 mt-5`}>
        {tabs.map((tab) => {
          const selected = currentTab === tab;

          const label =
            tab === ClientOrderView.ONGOING ? "On Goging" : "Completed";
          const count =
            tab === ClientOrderView.ONGOING ? onGoingCount : completedCount;

          return (
            <TabButton
              key={tab}
              label={label}
              // onClick={() => setCurrentTab(tab.key)}
              onClick={() => handleClickTab(tab)}
              selected={selected}
              count={count}
            />
          );
        })}
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
            <ClientOrderSummaryCard
              key={order.orderId}
              order={order}
              onClickDetails={() => console.log("")}
            />
          ))}
        </div>
      )}

      {showOrderPlacedToast && (
        <Toast message="Order has been placed" onClose={closeToast} />
      )}
    </section>
  );
};
