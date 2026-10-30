import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getToken } from "@/shared/utils/getToken";
import { ClientOrderView } from "./types/clientOrderView.enum";
import type {
  // ClientOrderSummaryDTO,
  NewClientOrderSummaryDTO,
} from "./api/getClientOrderSummaries/clientOrderSummary.dto";
import { getClientOrderSummaries } from "./api/getClientOrderSummaries/getClientOrderSummaries";
import { socket } from "../../../socket";
import { OrderStatus } from "../../restaurantDashboardPages/restaurantOrdersPage/types/orderStatus.enum";

export const useClientOrdersPage = () => {
  const token = getToken();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<ClientOrderView>(
    ClientOrderView.ONGOING
  );

  const [orders, setOrders] = useState<{
    onGoing: NewClientOrderSummaryDTO[];
    completed: NewClientOrderSummaryDTO[];
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

  // 1. 진행 중인 주문의 ID 목록
  // const onGoingOrderIds = orders.onGoing.map((order) => order.orderId);
  const onGoingOrderIds = orders.onGoing
    .map((order) => order.orderId)
    .sort()
    .join(",");

  // 2. 소켓 연결 및 이벤트 수신
  useEffect(() => {
    const orderIds = onGoingOrderIds ? onGoingOrderIds.split(",") : [];

    const handleConnect = () => {
      orderIds.forEach((orderId) => {
        socket.emit("joinOrderRoom", { orderId });
      });
    };

    const handleOrderStatusChanged = (payload: {
      orderId: string;
      status: OrderStatus;
    }) => {
      setOrders((prev) => {
        const targetOrder = prev.onGoing.find(
          (order) => order.orderId === payload.orderId
        );

        if (!targetOrder) return prev;

        const updatedOrder = {
          ...targetOrder,
          status: payload.status,
        };

        if (payload.status === OrderStatus.Delivered) {
          return {
            onGoing: prev.onGoing.filter(
              (order) => order.orderId !== payload.orderId
            ),
            completed: [updatedOrder, ...prev.completed],
          };
        }

        return {
          ...prev,
          onGoing: prev.onGoing.map((order) =>
            order.orderId === payload.orderId ? updatedOrder : order
          ),
        };
      });
    };

    socket.on("connect", handleConnect);
    socket.on("order.statusChanged", handleOrderStatusChanged);

    if (socket.connected) {
      handleConnect();
    } else {
      socket.connect();
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("order.statusChanged", handleOrderStatusChanged);

      if (socket.connected) {
        orderIds.forEach((orderId) => {
          socket.emit("leaveOrderRoom", { orderId });
        });
      }
    };
  }, [onGoingOrderIds]);
  // useEffect(() => {
  //   const handleConnect = () => {
  //     onGoingOrderIds.forEach((orderId) => {
  //       socket.emit("joinOrderRoom", { orderId });
  //     });
  //   };

  //   const handleOrderStatusChanged = (payload: {
  //     orderId: string;
  //     status: OrderStatus;
  //   }) => {
  //     setOrders((prev) => {
  //       const targetOrder = prev.onGoing.find(
  //         (order) => order.orderId === payload.orderId
  //       );

  //       if (!targetOrder) return prev;

  //       const updatedOrder = {
  //         ...targetOrder,
  //         status: payload.status,
  //       };

  //       if (payload.status === OrderStatus.Delivered) {
  //         return {
  //           onGoing: prev.onGoing.filter(
  //             (order) => order.orderId !== payload.orderId
  //           ),
  //           completed: [updatedOrder, ...prev.completed],
  //         };
  //       }

  //       return {
  //         ...prev,
  //         onGoing: prev.onGoing.map((order) =>
  //           order.orderId === payload.orderId ? updatedOrder : order
  //         ),
  //       };
  //     });
  //   };

  //   socket.on("connect", handleConnect);
  //   socket.on("order.statusChanged", handleOrderStatusChanged);

  //   if (socket.connected) {
  //     handleConnect();
  //   } else {
  //     socket.connect();
  //   }

  //   return () => {
  //     socket.off("connect", handleConnect);
  //     socket.off("order.statusChanged", handleOrderStatusChanged);
  //   };
  // }, [onGoingOrderIds]);

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

  const closeToast = () => setShowOrderPlacedToast(false);

  return {
    showOrderPlacedToast,
    currentTab,
    onGoingCount: orders.onGoing.length,
    completedCount: orders.completed.length,
    currentOrders,
    handleClickTab,
    closeToast,
  };
};
