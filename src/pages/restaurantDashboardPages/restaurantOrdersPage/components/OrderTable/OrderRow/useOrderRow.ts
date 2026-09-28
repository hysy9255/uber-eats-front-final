import { acceptOrder } from "../../../api/acceptOrder";
import { markOrderReady } from "../../../api/markOrderReady";
import { markOrderDeliverying } from "../../../api/markOrderDeliverying";
import { markOrderDelivered } from "../../../api/markOrderDelivered";
import { getRestaurantOrderDetail } from "../../../api/getRestaurantOrderDetail/getRestaurantOrderDetail";

export const useOrderRow = () => {
  const loadOrderDetail = async (token: string | null, orderId: string) => {
    if (!token) throw new Error("No Token Found");
    try {
      return await getRestaurantOrderDetail(token, orderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading order detail");
    }
  };

  const handleAcceptOrder = async (token: string | null, orderId: string) => {
    if (!token) throw new Error("No Token Found");
    try {
      await acceptOrder(token, orderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const handleMarkOrderReady = async (
    token: string | null,
    orderId: string
  ) => {
    if (!token) throw new Error("No Token Found");
    try {
      await markOrderReady(token, orderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const handleMarkOrderDeliverying = async (
    token: string | null,
    orderId: string
  ) => {
    if (!token) throw new Error("No Token Found");
    try {
      await markOrderDeliverying(token, orderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const handleMarkOrderDelivered = async (
    token: string | null,
    orderId: string
  ) => {
    if (!token) throw new Error("No Token Found");
    try {
      await markOrderDelivered(token, orderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  return {
    loadOrderDetail,
    handleAcceptOrder,
    handleMarkOrderReady,
    handleMarkOrderDeliverying,
    handleMarkOrderDelivered,
  };
};
