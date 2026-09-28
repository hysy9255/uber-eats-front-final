import { useCallback, useEffect, useState } from "react";
import { getToken } from "../../../shared/utils/getToken";
import { pauseRestaurant } from "./api/commands/pauseRestaurant";
import { restartRestaurant } from "./api/commands/restartRestaurant";
import { openRestaurant } from "./api/commands/openRestaurant";
import { closeRestaurant } from "./api/commands/closeRestaurant";
import { getRestaurantKpiSummary } from "./api/queries/getRestaurantKpiSummary/getKpiSummary";
import { getRestaurantRevenue } from "./api/queries/getRestaurantRevenue/getRestaurantRevenue";
import { getRestaurantTopSellingItems } from "./api/queries/getRestaurantTopSellingItems/getRestaurantTopSellingItems";
import { getRestaurantLiveOrders } from "./api/queries/getRestaurantLiveOrders/getRestaurantLiveOrders";
import type { RestaurantKpiSummaryDTO } from "./api/queries/getRestaurantKpiSummary/RestaurantKpiSummary.dto";
import type { RestaurantRevenueDTO } from "./api/queries/getRestaurantRevenue/RestaurantRevenue.dto";
import type { RestaurantTopSellingItemDTO } from "./api/queries/getRestaurantTopSellingItems/RestaurantTopSellingItem.dto";
import type { RestaurantLiveOrdersDTO } from "./api/queries/getRestaurantLiveOrders/RestaurantLiveOrders.dto";
import { useRestaurantDashboard } from "../shared/context/useRestaurantDashboard";
import { getMyProfile } from "../../../shared/api/getMyProfile/getMyProfile";
import type { UserProfileDTO } from "../../../shared/api/getMyProfile/userProfile.dto";
import { RestaurantStatus } from "../../../shared/types/restaurantStatus.type";
import type { RestaurantDetailDTO } from "../../clientPages/restaurantPage/api/restaurantDetail.dto";
import { getRestaurantDetail } from "../../clientPages/restaurantPage/api/getRestaurantDetail";

export const useRestaurantOverviewPage = () => {
  const token = getToken();
  const [userProfile, setUserProfile] = useState<UserProfileDTO>();
  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantDetailDTO>();
  const { restaurantId } = useRestaurantDashboard();
  const [overviewSummary, setOverviewSummary] =
    useState<RestaurantKpiSummaryDTO>();
  const [overviewRevenue, setOverviewRevenue] =
    useState<RestaurantRevenueDTO>();
  const [topSellingItems, setTopSellingItems] = useState<
    RestaurantTopSellingItemDTO[]
  >([]);
  const [manageRestaurantStatusModalOpen, setManageRestaurantStatusModalOpen] =
    useState(false);
  const [liveOrders, setLiveOrders] = useState<RestaurantLiveOrdersDTO>();

  const [dateRange] = useState(() => {
    const endDate = new Date();
    const startDate = new Date(endDate);

    startDate.setDate(endDate.getDate() - 6);

    return {
      startDate,
      endDate,
    };
  });

  const changeRestaurantStatus = async (nextStatus: RestaurantStatus) => {
    try {
      if (!token) {
        throw new Error("No Token");
      }

      if (!restaurantId) {
        throw new Error("No Restaurant ID");
      }

      const currentStatus = restaurantDetail?.status;

      if (!currentStatus) {
        throw new Error("Restaurant status not found");
      }

      if (currentStatus === nextStatus) {
        return;
      }

      if (
        currentStatus === RestaurantStatus.Open &&
        nextStatus === RestaurantStatus.Paused
      ) {
        await pauseRestaurant(token, restaurantId);
      } else if (
        currentStatus === RestaurantStatus.Paused &&
        nextStatus === RestaurantStatus.Open
      ) {
        await restartRestaurant(token, restaurantId);
      } else if (
        currentStatus === RestaurantStatus.Closed &&
        nextStatus === RestaurantStatus.Open
      ) {
        await openRestaurant(token, restaurantId);
      } else if (nextStatus === RestaurantStatus.Closed) {
        await closeRestaurant(token, restaurantId);
      } else {
        throw new Error(
          `Invalid restaurant status transition: ${currentStatus} -> ${nextStatus}`
        );
      }

      // API 성공 후에 공통으로 state 변경
      setRestaurantDetail((prev) =>
        prev
          ? {
              ...prev,
              status: nextStatus,
            }
          : prev
      );
    } catch (e) {
      console.error(e);
      throw new Error("Error changing restaurant status");
    }
  };

  const loadRestaurantOverviewLiveOrders = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const restaurantOverviewLiveOrdersData = await getRestaurantLiveOrders(
        token,
        restaurantId
      );
      setLiveOrders(restaurantOverviewLiveOrdersData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading restaurant overview live orders data");
    }
  }, [token, restaurantId]);

  const loadRestaurantOverviewTopSellingItemsData = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const restaurantOverviewTopSellingItemsData =
        await getRestaurantTopSellingItems(
          token,
          restaurantId,
          dateRange.startDate,
          dateRange.endDate
        );
      setTopSellingItems(restaurantOverviewTopSellingItemsData);
    } catch (e) {
      console.error(e);
      throw new Error(
        "Error loading restaurant overview top selling items data"
      );
    }
  }, [token, dateRange, restaurantId]);

  const loadRestaurantOverviewSummaryData = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const restaurantOverviewSummaryData = await getRestaurantKpiSummary(
        token,
        restaurantId,
        dateRange.startDate,
        dateRange.endDate
      );
      setOverviewSummary(restaurantOverviewSummaryData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading restaurant overview summary data");
    }
  }, [token, dateRange, restaurantId]);

  const loadRestaurantOverviewRevenueData = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");

      const restaurantOverviewRevenueData = await getRestaurantRevenue(
        token,
        restaurantId,
        dateRange.startDate,
        dateRange.endDate
      );
      setOverviewRevenue(restaurantOverviewRevenueData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading restaurant overview revenue data");
    }
  }, [token, dateRange, restaurantId]);

  const loadRestaurantDetailData = useCallback(async () => {
    try {
      if (!restaurantId) throw new Error("No Restaurant ID");
      const restaurantDetailData = await getRestaurantDetail(restaurantId);
      setRestaurantDetail(restaurantDetailData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading restaurant detail data");
    }
  }, [restaurantId]);

  const loadProfileData = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      const profileData = await getMyProfile(token);
      setUserProfile(profileData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading profile data");
    }
  }, [token]);

  useEffect(() => {
    loadProfileData();
    loadRestaurantDetailData();
    loadRestaurantOverviewSummaryData();
    loadRestaurantOverviewRevenueData();
    loadRestaurantOverviewTopSellingItemsData();
    loadRestaurantOverviewLiveOrders();
  }, [
    loadProfileData,
    loadRestaurantDetailData,
    loadRestaurantOverviewSummaryData,
    loadRestaurantOverviewRevenueData,
    loadRestaurantOverviewTopSellingItemsData,
    loadRestaurantOverviewLiveOrders,
  ]);

  return {
    restaurantDetail,
    userProfile,
    overviewSummary,
    overviewRevenue,
    topSellingItems,
    liveOrders,
    manageRestaurantStatusModalOpen,
    setManageRestaurantStatusModalOpen,
    changeRestaurantStatus,
  };
};
