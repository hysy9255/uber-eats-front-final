import { useCallback, useEffect, useState } from "react";
import { extractUniqueCategories } from "./utils/extractUniqueCategories";
import { getDayOfWeek } from "./utils/getDayOfWeek";
import { useParams } from "react-router-dom";
import { getRestaurantDetail } from "./api/getRestaurantDetail";
import type { DishSummaryDTO } from "../dishPage/api/getDishSummaries/dishSummary.dto";
import { getDishSummaries } from "../dishPage/api/getDishSummaries/getDishSummaries";
import type { RestaurantDetailDTO } from "./api/restaurantDetail.dto";
import type { RestaurantHoursDTO } from "../../restaurantDashboardPages/RestaurantHoursPage/api/getRestaurantHours/restaurantHours.dto";
import { getRestaurantHours } from "../../restaurantDashboardPages/RestaurantHoursPage/api/getRestaurantHours/getRestaurantHours";
import { socket } from "../../../socket";
import type { RestaurantStatus } from "../../../shared/types/restaurantStatus.type";

export const useRestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantDetailDTO>();
  const [menu, setMenu] = useState<DishSummaryDTO[]>([]);
  const [operatingHours, setOperatingHours] = useState<RestaurantHoursDTO[]>(
    []
  );
  const [operatingHoursPopUpOpen, setOperatingHoursPopUpOpen] = useState(false);

  const loadRestaurantViewData = useCallback(async () => {
    if (!restaurantId) return;

    try {
      const [restaurantDetailData, menuData, hoursData] = await Promise.all([
        getRestaurantDetail(restaurantId),
        getDishSummaries(restaurantId),
        getRestaurantHours(restaurantId),
      ]);

      setRestaurantDetail(restaurantDetailData);
      setMenu(menuData);
      setOperatingHours(hoursData);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to load restaurant view data");
    }
  }, [restaurantId]);

  useEffect(() => {
    loadRestaurantViewData();
  }, [loadRestaurantViewData]);

  useEffect(() => {
    if (!restaurantId) return;

    const handleConnect = () => {
      console.log("Socket connected:", socket.id);
      socket.emit("joinRestaurantStatusRoom", { restaurantId });
    };

    const handleStatusChanged = (restaurantStatus: RestaurantStatus) => {
      console.log("Restaurant status has changed:", restaurantStatus);

      setRestaurantDetail((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          status: restaurantStatus,
        };
      });
    };

    socket.on("connect", handleConnect);
    socket.on("restaurant.statusChanged", handleStatusChanged);

    // 현재 연결상태 확인
    if (socket.connected) {
      //이미 연결되어 있으므로 connect 이벤트가 새로 발생하지 않아.
      //그래서 handleConnect()를 직접 실행하는 거야.
      handleConnect();
    } else {
      //아직 연결되어 있지 않다면
      //socket.connect()로 서버 연결을 시작하지.
      socket.connect();
    }

    // return () => {
    //   socket.off("connect", handleConnect);
    //   socket.off("restaurant.statusChanged", handleStatusChanged);
    //   socket.disconnect();
    // };

    return () => {
      socket.off("connect", handleConnect);
      socket.off("restaurant.statusChanged", handleStatusChanged);

      if (socket.connected) {
        socket.emit("leaveRestaurantStatusRoom", {
          restaurantId,
        });
      }
    };
  }, [restaurantId]);

  const today = getDayOfWeek(new Date());
  const todayHours = operatingHours.find((day) => day.dayOfWeek === today);

  const categories = extractUniqueCategories(menu.map((dish) => dish.category));

  const handleClickOperatingHours = () => setOperatingHoursPopUpOpen(true);
  const handleClickCloseOperatingHours = () =>
    setOperatingHoursPopUpOpen(false);

  return {
    restaurantDetail,
    menu,
    categories,
    operatingHours,
    todayHours,
    operatingHoursPopUpOpen,
    handleClickOperatingHours,
    handleClickCloseOperatingHours,
  };
};
