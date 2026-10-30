import { useCallback, useEffect, useState } from "react";
import { getToken } from "../../../shared/utils/getToken";
import { getRestaurantOrderSummaries } from "./api/getRestaurantOrderSummaries/getRestaurantOrderSummaries";
import type { RestaurantOrderSummaryDTO } from "./api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import type { OrderStatus } from "./types/orderStatus.enum";
import { socket } from "../../../socket";
import { useRestaurantDashboard } from "../shared/context/useRestaurantDashboard";

export const useRestaurantOrdersData = () => {
  const token = getToken();
  const { restaurantId } = useRestaurantDashboard();

  const [orders, setOrders] = useState<RestaurantOrderSummaryDTO[]>([]);

  const loadOrders = useCallback(async () => {
    if (!token) {
      throw new Error("No Token");
    }

    try {
      const ordersData = await getRestaurantOrderSummaries(token);

      setOrders(ordersData);
    } catch (e) {
      console.error(e);

      throw new Error("Error loading orders for restaurant");
    }
  }, [token]);

  const updateOrderStatusLocally = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.orderId === orderId
          ? {
              ...order,
              status,
            }
          : order
      )
    );
  };

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  useEffect(() => {
    if (!restaurantId) return;

    const handleConnect = () => {
      console.log("Socket connected:", socket.id);

      socket.emit("joinRestaurantRoom", {
        restaurantId,
      });
    };

    const handleOrderCreated = (order: RestaurantOrderSummaryDTO) => {
      console.log("New order received:", order);

      setOrders((prev) => [order, ...prev]);
    };

    // 이벤트 리스너 등록
    // 앞으로 서버 연결이 성공하면 handleConnect()를 실행해 줘.
    socket.on("connect", handleConnect);
    socket.on("order.created", handleOrderCreated);

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
    //   socket.off("order.created", handleOrderCreated);
    //   socket.disconnect();
    // };

    return () => {
      socket.off("connect", handleConnect);
      socket.off("order.created", handleOrderCreated);

      if (socket.connected) {
        socket.emit("leaveRestaurantRoom", {
          restaurantId,
        });
      }
    };
  }, [restaurantId]);

  return { orders, updateOrderStatusLocally };
};
