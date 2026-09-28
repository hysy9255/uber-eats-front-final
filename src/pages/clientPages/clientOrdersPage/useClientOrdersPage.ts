import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getToken } from "@/shared/utils/getToken";
import { ClientOrderView } from "./types/clientOrderView.enum";
import type { ClientOrderSummaryDTO } from "./api/getClientOrderSummaries/clientOrderSummary.dto";
import { getClientOrderSummaries } from "./api/getClientOrderSummaries/getClientOrderSummaries";

export const useClientOrdersPage = () => {
  const token = getToken();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<ClientOrderView>(
    ClientOrderView.ONGOING
  );

  const [orders, setOrders] = useState<{
    onGoing: ClientOrderSummaryDTO[];
    completed: ClientOrderSummaryDTO[];
  }>({
    onGoing: [],
    completed: [],
  });

  const [showOrderPlacedToast, setShowOrderPlacedToast] = useState(
    location.state?.orderPlaced === true
  );

  const loadOrdersData = useCallback(async () => {
    try {
      if (!token) return;
      const [onGoingData, completedData] = await Promise.all([
        getClientOrderSummaries(token, ClientOrderView.ONGOING),
        getClientOrderSummaries(token, ClientOrderView.COMPLETED),
      ]);

      setOrders({
        onGoing: onGoingData,
        completed: completedData,
      });
    } catch (e) {
      console.error("Error loading orders data", e);
    }
  }, [token]);

  useEffect(() => {
    loadOrdersData();
  }, [loadOrdersData]);

  useEffect(() => {
    if (location.state?.orderPlaced !== true) return;

    navigate(location.pathname, {
      replace: true,
      state: {},
    });
  }, [location.pathname, location.state, navigate]);

  const currentOrders =
    currentTab === ClientOrderView.ONGOING ? orders.onGoing : orders.completed;

  const handleClickTab = (tab: ClientOrderView) => setCurrentTab(tab);

  const handleClickCloseToast = () => setShowOrderPlacedToast(false);

  return {
    showOrderPlacedToast,
    currentTab,
    onGoingCount: orders.onGoing.length,
    completedCount: orders.completed.length,
    currentOrders,
    handleClickTab,
    handleClickCloseToast,
  };
};
