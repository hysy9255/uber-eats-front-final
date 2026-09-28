import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import RestaurantQuickInfo from "./components/RestaurantQuickInfo/RestaurantQuickInfo";
import StoreHoursModal from "./components/StoreHoursModal/StoreHoursModal";
import { useRestaurantPage } from "./useRestaurantPage";

const RestaurantPage = () => {
  const {
    restaurantDetail,
    finalMenu: menu,
    categories,
    operatingHours,
    todayHours,
    operatingHoursPopUpOpen,
    handleClickOperatingHours,
    handleClickCloseOperatingHours,
  } = useRestaurantPage();

  return (
    <main className="px-[16px] pt-[8px]">
      {restaurantDetail && <Banner bannerInfo={restaurantDetail} />}
      <RestaurantQuickInfo
        onClickOperatingHours={handleClickOperatingHours}
        todayHours={todayHours}
      />
      {menu.length === 0 ? (
        <div></div>
      ) : (
        <Menu categories={categories} menu={menu} />
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
