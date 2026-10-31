import NoItemsMessageBox from "../../../shared/components/NoItemsMessageBox";
import Banner from "./components/Banner/Banner";
import { MenuV2 } from "./components/Menu/MenuV2";
import RestaurantQuickInfo from "./components/RestaurantQuickInfo/RestaurantQuickInfo";
import StoreHoursModal from "./components/StoreHoursModal/StoreHoursModal";
import { useRestaurantPage } from "./useRestaurantPage";

const RestaurantPage = () => {
  const {
    restaurantDetail,
    menu,
    categories,
    operatingHours,
    todayHours,
    operatingHoursPopUpOpen,
    handleClickOperatingHours,
    handleClickCloseOperatingHours,
  } = useRestaurantPage();

  return (
    <main className="pt-5 px-5 pb-[16px]">
      {restaurantDetail && <Banner bannerInfo={restaurantDetail} />}
      <RestaurantQuickInfo
        onClickOperatingHours={handleClickOperatingHours}
        todayHours={todayHours}
      />
      {menu.length === 0 ? (
        <div className="mt-3">
          <NoItemsMessageBox title="No registered menus yet" content="" />
        </div>
      ) : (
        <MenuV2 categories={categories} menu={menu} />
      )}

      {operatingHoursPopUpOpen && (
        <StoreHoursModal
          onClose={handleClickCloseOperatingHours}
          restaurantHours={operatingHours}
        />
      )}
    </main>
  );
};

export default RestaurantPage;
