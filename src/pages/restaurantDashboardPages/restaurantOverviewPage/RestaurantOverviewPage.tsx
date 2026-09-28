import OwnerOverviewPageHeader from "./components/OwnerOverviewPageHeader";
import RestaurantSummary from "./components/RestaurantSummary";
import KpiSection from "./components/KpiSection/KpiSection";
import { RevenueCard } from "./components/RevenueCard";
import { LiveOrdersCard } from "./components/LiveOrdersCard/LiveOrdersCard";
import { TopSellingItemsCard } from "./components/TopSellingItemsCard";
import { CustomerActivityCard } from "./components/CustomerActivityCard/CustomerActivityCard";
import { useRestaurantOverviewPage } from "./useRestaurantOverviewPage";
import { ManageRestaurantStatusModal } from "./components/ManageRestaurantStatusModal/ManageRestaurantStatusModal";
import { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

const RestaurantOverviewPage = () => {
  const {
    restaurantDetail,
    userProfile,
    overviewSummary,
    overviewRevenue,
    topSellingItems,
    liveOrders,
    manageRestaurantStatusModalOpen,
    setManageRestaurantStatusModalOpen,
    changeRestaurantStatus,
  } = useRestaurantOverviewPage();

  const renderRestaurantStatus = () => {
    switch (restaurantDetail?.status) {
      case RestaurantStatus.Open:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            <span className="w-2 h-2 rounded-full bg-green-600" />
            Open
          </span>
        );

      case RestaurantStatus.Paused:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            Paused
          </span>
        );

      case RestaurantStatus.Closed:
        return (
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gray-500" />
            Closed
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-5">
      {/* Top Header */}
      <OwnerOverviewPageHeader userProfile={userProfile} />

      {/* Restaurant summary */}
      <RestaurantSummary
        onClcickManageStatus={() => setManageRestaurantStatusModalOpen(true)}
        restaurantDetail={restaurantDetail}
        renderRestaurantStatus={renderRestaurantStatus}
      />

      {/* KPI */}
      <KpiSection overviewSummary={overviewSummary} />

      {/* Revenue + live orders */}
      <section className="mt-4 grid grid-cols-[1.05fr_1fr] gap-4">
        <RevenueCard overviewRevenue={overviewRevenue} />
        <LiveOrdersCard liveOrders={liveOrders} />
      </section>

      {/* Bottom */}
      <section className="mt-4 grid grid-cols-[1.05fr_1fr] gap-4">
        <TopSellingItemsCard items={topSellingItems} />
        <CustomerActivityCard />
      </section>
      {manageRestaurantStatusModalOpen && (
        <ManageRestaurantStatusModal
          currentStatus={restaurantDetail?.status ?? RestaurantStatus.Closed}
          onClose={() => setManageRestaurantStatusModalOpen(false)}
          onSave={changeRestaurantStatus}
        />
      )}
    </div>
  );
};

export default RestaurantOverviewPage;
