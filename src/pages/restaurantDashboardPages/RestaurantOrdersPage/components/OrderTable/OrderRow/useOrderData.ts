import { getToken } from "../../../../../../shared/utils/getToken";
import { acceptOrder } from "../../../api/acceptOrder";
import { markOrderDelivered } from "../../../api/markOrderDelivered";
import { markOrderDeliverying } from "../../../api/markOrderDeliverying";
import { markOrderReady } from "../../../api/markOrderReady";

export const useOrderData = () => {
  const token = getToken();

  const acceptTargetOrder = async (targetOrderId: string) => {
    if (!token) throw new Error("No Token Found");
    try {
      await acceptOrder(token, targetOrderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const markTargetOrderReady = async (targetOrderId: string) => {
    if (!token) throw new Error("No Token Found");

    try {
      await markOrderReady(token, targetOrderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const markTargetOrderDelivering = async (targetOrderId: string) => {
    if (!token) throw new Error("No Token Found");

    try {
      await markOrderDeliverying(token, targetOrderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const markTargetOrderDelivered = async (targetOrderId: string) => {
    if (!token) throw new Error("No Token Found");

    try {
      await markOrderDelivered(token, targetOrderId);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  return {
    acceptTargetOrder,
    markTargetOrderReady,
    markTargetOrderDelivering,
    markTargetOrderDelivered,
  };
};
